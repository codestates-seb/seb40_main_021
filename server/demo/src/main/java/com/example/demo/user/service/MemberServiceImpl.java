package com.example.demo.user.service;

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
        if (memberRepository.findByUserId(requestDto.getUserId()).isPresent()){
            throw new Exception("이미 존재하는 아이디입니다.");
        }

//        if (!requestDto.getPassword().equals(requestDto.getCheckedPassword())){
//            throw new Exception("비밀번호가 일치하지 않습니다.");
//        }
        Member member = memberRepository.save(requestDto.toEntity());
        member.encodePassword(passwordEncoder);

        //member.a();
        return member.getId();
    }
    @Override
    public String login(Map<String, String> members) {

        Member member = memberRepository.findByUserId(members.get("userId"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID 입니다."));

//        String password = members.get("password");
//        if (!member.checkPassword(passwordEncoder, password)) {
//            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
//        }

        List<String> roles = new ArrayList<>();
        roles.add(member.getRole().name());

        return jwtTokenProvider.createToken(member.getUserName(), roles);
    }
}
