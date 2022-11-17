package com.example.demo.user.dto;

import com.example.demo.user.entity.Member;
import com.example.demo.user.entity.Role;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
@Data
@Builder
@AllArgsConstructor
public class MemberSignUpRequestDto {


    @NotBlank(message = "아이디를 입력해주세요")
    private String userId;

    @NotBlank(message = "비밀번호를 입력해주세요")
//    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,30}$",
//            message = "비밀번호는 8~30 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String password;

//    @NotBlank(message = "사업자번호를 입력해주세요 ex) XXX-XXXX-XXXX-XX")
//    private String bussinessNumber;
//
//    @NotBlank(message = "사업자명을 입력해주세요")
//    private String bussinessName;
//
//    @NotBlank(message = "핸드폰 번호를 입력해주세요. ex) 010-1234-5678")
//    private String phoneNumber;
//
//    @NotBlank(message = "이름을 입력해주세요.")
//    private String userName;
//
//    @NotBlank(message = "생년월일을 입력해주세요.")
//    private String birth;
//
//    @NotBlank(message = "사업자 주소을 입력해주세요.")
//    private String addresss;
//
//    private String checkedPassword;
//
//    private Role role;

    @Builder
    public Member toEntity(){
        return Member.builder()
                .userId(userId)
                //.bussinessNumber(bussinessNumber)
               // .bussinessName(bussinessName)
                .password(password)
               // .phoneNumber(phoneNumber)
               // .userName(userName)
               // .birth(birth)
               // .address(addresss)
                .role(Role.ADMIN)
                .build();
    }
}
