package com.example.demo.category.entity;

import com.example.demo.menu.entity.Menu;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @Column(nullable = false, columnDefinition = "VARCHAR(20)")
    private String categoryName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true, name = "STATUS")
    private CategoryStatus categoryStatus = CategoryStatus.CATEGORY_EXIST;

//    public Category(String categoryName){
//        this.categoryName = categoryName;
//    }

//    @ManyToOne
//    @JoinColumn(name = "USER_ID")
//    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Menu> menus = new ArrayList<>();
    public enum CategoryStatus{
        CATEGORY_EXIST("존재하는 카테고리");

        @Getter
        private String status;

        CategoryStatus(String status){
            this.status = status;
        }
    }
}
