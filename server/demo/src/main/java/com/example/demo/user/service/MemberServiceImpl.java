package com.example.demo.user.service;

import com.example.demo.category.entity.Category;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.user.config.JwtTokenProvider;
import com.example.demo.user.dto.MemberSignUpRequestDto;
import com.example.demo.user.entity.Member;
import com.example.demo.user.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional
@Service
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    @Override
    public Long signUp(MemberSignUpRequestDto requestDto) throws Exception
    {
        if (memberRepository.findByLoginId(requestDto.getLoginId()).isPresent()){
            throw new Exception("이미 존재하는 아이디입니다.");
        }

        Member member = memberRepository.save(requestDto.toEntity());
        member.encodePassword(passwordEncoder);

        return member.getId();
    }
    @Override
    public String login(Map<String, String> members) {

        Member member = memberRepository.findByLoginId(members.get("loginId"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));

        List<String> roles = new ArrayList<>();
        roles.add(member.getRole().name());

        return jwtTokenProvider.createToken(member.getLoginId(), roles);
    }

    @Override
    public Member findMember(long MemberId) {
        return findVerifiedMember(MemberId);
    }


    @Override
    public Member updateMember(Member member){

//        Member findMember = findVerifiedMember(member.getId());
////
//        Optional.ofNullable(member.getId())
//                .ifPresent(memberId -> findMember.setId(memberId));

    Member findMember =findVerifiedMember(member.getId());
        Optional.ofNullable(member.getAbout())
                .ifPresent(about -> findMember.setAbout(about));
        Optional.ofNullable(member.getAddress())
                .ifPresent(address -> findMember.setAddress(address));
        Optional.ofNullable(member.getContactNumber())
                .ifPresent(cn -> findMember.setContactNumber(cn));
        Optional.ofNullable(member.getBusinessNumber())
                .ifPresent(bn -> findMember.setBusinessNumber(bn));
        Optional.ofNullable(member.getBusinessName())
                .ifPresent(bname -> findMember.setBusinessName(bname));
        Optional.ofNullable(member.getBusinessHours())
                .ifPresent(bh -> findMember.setBusinessHours(bh));
        Optional.ofNullable(member.getPassword())
                .ifPresent(pw -> findMember.setPassword(pw));


        return memberRepository.save(findMember);
    }

    @Override
    public void deleteMember(long memberId){


        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }

    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }


//    @Override
//    public void deleteMember(long memberId){
//        Member findMember = findVerifiedMember(memberId);
//        memberRepository.delete(findMember);
//    }


}
