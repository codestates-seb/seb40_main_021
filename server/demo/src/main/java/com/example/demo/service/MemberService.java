package com.example.demo.service;

import com.example.demo.auth.CustomAuthorityUtils;
import com.example.demo.dto.MemberDto;
import com.example.demo.entity.Member;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {

        verifyMemberByLoginId(member.getLoginId());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getLoginId());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getLoginId())
                .ifPresent(findMember::setLoginId);
        Optional.ofNullable(member.getPassword())
                .ifPresent(findMember::setPassword);
        Optional.ofNullable(member.getAbout())
                .ifPresent(findMember::setAbout);
        Optional.ofNullable(member.getAddress())
                .ifPresent(findMember::setAddress);
        Optional.ofNullable(member.getContactNumber())
                .ifPresent(findMember::setContactNumber);
        Optional.ofNullable(member.getBusinessName())
                .ifPresent(findMember::setBusinessName);
        Optional.ofNullable(member.getBusinessHours())
                .ifPresent(findMember::setBusinessHours);
        Optional.ofNullable(member.getBusinessNumber())
                .ifPresent(findMember::setBusinessNumber);
        Optional.ofNullable(member.getUserImage())
                .ifPresent(findMember::setUserImage);

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifyMemberByLoginId(String loginId) {
        Optional<Member> member = memberRepository.findByLoginId(loginId);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public boolean loginIdCheck(MemberDto.loginIdCheck requestBody) {

        List<Member> memberList = memberRepository.findAll().stream()
                .filter(member -> member.getLoginId().equals(requestBody.getLoginId()))
                .collect(Collectors.toList());
        if(memberList.size() == 1) {
            return false;
        }
        else {
            return true;
        }
    }
}