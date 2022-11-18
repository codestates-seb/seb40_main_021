package com.example.demo.user.dto;

import com.example.demo.user.entity.Member;
import com.example.demo.user.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@Builder
@AllArgsConstructor
public class MemberSignUpRequestDto {


    @NotBlank(message = "아이디를 입력해주세요")
    private String loginId;

    @NotBlank(message = "비밀번호를 입력해주세요")
//    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,30}$",
//            message = "비밀번호는 8~30 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String password;


    private String businessNumber;
    private String about;
    private String address;
    private String contactNumber;


    @Builder
    public Member toEntity(){
        return Member.builder()
                .loginId(loginId)
                .password(password)
                .businessNumber(businessNumber)
                .about(about)
                .address(address)
                .contactNumber(contactNumber)
                .role(Role.ADMIN)
                .build();
    }
}
