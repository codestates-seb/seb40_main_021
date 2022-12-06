package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long MenuId;

    @Column(nullable = false, columnDefinition = "VARCHAR(20)")
    private String menuName;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String menuContent;

    @Column(nullable = false, columnDefinition = "BIGINT")
    private int price;

    @Column(nullable = false)
    private Boolean recommendedMenu;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String menuImage;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
