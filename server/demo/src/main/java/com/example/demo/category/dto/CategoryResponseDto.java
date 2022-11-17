package com.example.demo.category.dto;

import com.example.demo.category.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
//@AllArgsConstructor
public class CategoryResponseDto {
    private long categoryId;
    private String categoryName;
    private Category.CategoryStatus categoryStatus;

//    public String getCategoryStatus(){
//        return categoryStatus.getStatus();
//    }
}
