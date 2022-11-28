package com.example.demo.user.dto;


import com.example.demo.user.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    @AllArgsConstructor // TODO 테스트를 위해 추가됨
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        // (1) 패스워드 필드 추가
        @NotBlank
        private String password;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phone;
        private String businessNumber;
        private String about;
        private String address;
        private String contactNumber;
        private String businessName;
        private String businessHours;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;


        private String name;


        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다")
        private String phone;

        private Member.MemberStatus memberStatus;


        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @AllArgsConstructor
    @Getter
    @NoArgsConstructor
    public static class Response {
        private long memberId;
        private String email;
        private String name;
        private String phone;
        private Member.MemberStatus memberStatus;
        private String about;
        private String address;
        private String contactNumber;
        private String businessName;
        private String businessHours;

        private String businessNumber;
        public String getMemberStatus() {
            return memberStatus.getStatus();
        }

    }
}
