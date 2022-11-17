package com.example.demo.category.dto;

import com.example.demo.category.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class CategoryResponseDtos {
    private long categoryId;
    private String categoryName;
}
