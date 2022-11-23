package com.example.demo.user.service;

import com.example.demo.user.dto.MemberSignUpRequestDto;
import com.example.demo.user.entity.Member;

import java.util.Map;

public interface MemberService {
    public Long signUp(MemberSignUpRequestDto requestDto) throws Exception;
    public String login(Map<String, String> members);
    public Member findMember(long MemberId);
    public Member updateMember(Member member);
    public void deleteMember(long memberId);

//    public void updateMember(Member member);
}
