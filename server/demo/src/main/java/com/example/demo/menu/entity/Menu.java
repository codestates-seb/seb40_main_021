package com.example.demo.menu.entity;

import com.example.demo.category.entity.Category;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
//@Table(name = "MENU")
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
    private Integer vote = 0;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true, name = "STATUS")
    private MenuStatus menuStatus = MenuStatus.MENU_EXIST;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category category;

    public enum MenuStatus{
        MENU_EXIST("존재하는 메뉴");

        @Getter
        private String status;

        MenuStatus(String status){
            this.status = status;
        }
    }


}
