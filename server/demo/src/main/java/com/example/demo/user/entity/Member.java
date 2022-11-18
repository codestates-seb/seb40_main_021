package com.example.demo.user.entity;

import com.example.demo.category.entity.Category;
import com.example.demo.table.entity.Table;
import lombok.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableLoadTimeWeaving;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Member extends BaseTimeEntity {
    @Id @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45, unique = true)
    private String loginId;

    @Column(length = 100)
    private String password;


    //businessNumber, image, storeDescription, storeAddress, storePhoneNumber,
    //storeOpeningHours

    private String businessNumber;
    private String about;
    private String address;
    private String contactNumber;







        @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Category> categoryList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Table> tableList = new ArrayList<>();

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);

    }
}
