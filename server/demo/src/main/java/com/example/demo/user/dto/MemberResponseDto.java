package com.example.demo.user.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MemberResponseDto {
    private long memberId;
    private String businessNumber;
    private String about;
    private String address;
    private String contactNumber;
    private String businessName;
    private String businessHours;
    private String password;

}
