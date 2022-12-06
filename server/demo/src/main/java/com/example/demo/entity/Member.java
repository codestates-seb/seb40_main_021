package com.example.demo.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Auditable;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.time.temporal.TemporalAccessor;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends BaseTimeEntity {

    @Id @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column
    private String loginId;

    @Column
    private String password;

    @Column
    private String businessNumber;

    @Column
    private String about;

    @Column
    private String address;

    @Column
    private String contactNumber;

    @Column
    private String businessName;

    @Column
    private String businessHours;


    @Column(columnDefinition = "TEXT")
    private String userImage;


    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Category> categoryList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Table> tableList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade =  CascadeType.REMOVE)
    private List<Menu> menuList = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }
}