package com.example.demo.menu.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class MenuPostDto {
    @Positive
    @NotNull
    private Long categoryId;

    @NotBlank(message = "The name must not be blank.")
    private String menuName;

    @NotBlank(message = "The content must not be blank.")
    private String menuContent;

//    @NotBlank(message = "The price must not be blank.")
    private Integer price;
}
