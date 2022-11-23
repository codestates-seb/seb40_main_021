package com.example.demo.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class MemberPatchDto {
    private long id;
    private String businessNumber;
    private String about;
    private String address;
    private String contactNumber;
    private String businessName;
    private String businessHours;
    private String password;



    public void setMemberId(long id) {
        this.id = id;
    }
}



