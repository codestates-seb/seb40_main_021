package com.example.demo.user.entity;


import com.example.demo.auth.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 13, nullable = false)
    private String phone;
    @Column(length = 100, nullable = false)
    private String password;

    private String businessNumber;
    private String about;
    private String address;
    private String contactNumber;
    private String businessName;
    private String businessHours;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();




    public Member(String email) {
        this.email = email;
    }

    public Member(String email, String name, String phone) {
        this.email = email;
        this.name = name;
        this.phone = phone;
    }



    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
           this.status = status;
        }
    }
}
