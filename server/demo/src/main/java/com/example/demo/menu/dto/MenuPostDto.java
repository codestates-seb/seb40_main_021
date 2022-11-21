package com.example.demo.menu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuPostDto {
    @Positive
    @NotNull
    private Long categoryId;

    @Positive
    @NotNull
    private Long memberId;

    @NotBlank(message = "The name must not be blank.")
    private String menuName;

    @NotBlank(message = "The content must not be blank.")
    private String menuContent;

    @NotNull
    private Integer price;
    private Boolean  recommendedMenu;
}
