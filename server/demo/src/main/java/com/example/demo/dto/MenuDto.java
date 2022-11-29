package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

public class MenuDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class MenuPostDto {
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

        private String menuImage;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class MenuPatchDto {
        private Long categoryId;
        private Long memberId;
        private Long menuId;

        @NotBlank(message = "The name must not be blank.")
        private String menuName;

        @NotBlank(message = "The content must not be blank.")
        private String menuContent;

        @NotNull
        private Integer price;

        private Boolean recommendedMenu;

        private String menuImage;
    }

    @Getter
    @Setter
    public static class MenuPatchListDto {
        private List<MenuPatchDto> menuList;
    }

    @Setter
    @Getter
    public static class MenuResponseDto {
        private long memberId;
        private long menuId;
        private String menuName;
        private String menuContent;
        private int price;
        private Boolean recommendedMenu;
        private String menuImage;
        private long categoryId;
    }
}
