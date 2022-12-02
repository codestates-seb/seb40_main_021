package com.example.demo.dto;

import lombok.*;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String loginId;
        private String password;
        private String businessNumber;
        private String about;
        private String address;
        private String contactNumber;
        private String businessName;
        private String businessHours;
        private String userImage;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private Long memberId;
        private String loginId;
        private String password;
        private String businessNumber;
        private String about;
        private String address;
        private String contactNumber;
        private String businessName;
        private String businessHours;
        private String userImage;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {

        private long memberId;
//        private String loginId;
//        private String password;
        private String businessNumber;
        private String about;
        private String address;
        private String contactNumber;
        private String businessName;
        private String businessHours;
        private String userImage;
    }

    @Data
    public static class loginIdCheck {
        private String loginId;
    }
}