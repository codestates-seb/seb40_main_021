package com.example.demo.user.controller;

import com.example.demo.category.dto.CategoryPatchDto;
import com.example.demo.category.entity.Category;
import com.example.demo.dto.SingleResponseDto;
import com.example.demo.user.dto.MemberPatchDto;
import com.example.demo.user.dto.MemberSignUpRequestDto;
import com.example.demo.user.entity.Member;
import com.example.demo.user.mapper.MemberMaper;
import com.example.demo.user.repository.MemberRepository;
import com.example.demo.user.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Map;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/member")
@RestController
public class MemberController {

    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final MemberMaper memberMapper;

    @PostMapping("/join")
    @ResponseStatus(HttpStatus.OK)
    public Long join(@Valid @RequestBody MemberSignUpRequestDto request) throws Exception {
        return memberService.signUp(request);
    }
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> member) {
        return memberService.login(member);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        memberMapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }

    @PatchMapping("/update/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                        @Valid @RequestBody MemberPatchDto memberPatchDto){

        memberPatchDto.setMemberId(memberId);
        Member response = memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }
//    @DeleteMapping("/{member-id}")
//    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
//        memberService.deleteMember(memberId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMebmer(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
