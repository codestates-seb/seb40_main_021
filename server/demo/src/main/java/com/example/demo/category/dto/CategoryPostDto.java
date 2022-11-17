package com.example.demo.category.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class CategoryPostDto {
//    private long userId;
    @NotBlank(message = "The name must not be blank.")
    private String categoryName;

}
