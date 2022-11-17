package com.example.demo.user.service;

import com.example.demo.user.dto.MemberSignUpRequestDto;

import java.util.Map;

public interface MemberService {
    public Long signUp(MemberSignUpRequestDto requestDto) throws Exception;
    public String login(Map<String, String> members);

}
