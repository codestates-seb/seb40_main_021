package com.example.demo.category.dto;

import com.example.demo.category.entity.Category;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class CategoryPatchDto {
    private long categoryId;

    @NotBlank(message = "The name must not be blank.")
    private String categoryName;

    public void setCategoryId(long categoryId){
        this.categoryId = categoryId;
    }
}
