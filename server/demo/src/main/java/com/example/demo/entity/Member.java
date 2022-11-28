package com.example.demo.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Auditable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {

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

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Category> categoryList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Table> tableList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade =  CascadeType.REMOVE)
    private List<Menu> menuList = new ArrayList<>();
}