package com.example.demo.dto;

import com.example.demo.entity.Menu;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class CategoryDto {

    @Getter
    @Setter
    public static class CategoryPostDto {
        private long memberId;

        @NotBlank(message = "The name must not be blank.")
        private String categoryName;


    }

    @Getter
    @Setter
    public static class CategoryPatchDto {
        private long categoryId;

        @NotBlank(message = "The name must not be blank.")
        private String categoryName;


        public void setCategoryId(long categoryId){
            this.categoryId = categoryId;
        }
    }

    @Setter
    @Getter
    public static class CategoryResponseDto {
        private long categoryId;
        private String categoryName;

    }

    @Setter
    @Getter
    @AllArgsConstructor
    public static class CategoryResponseDtos {
        private long categoryId;
        private String categoryName;

    }

    @Getter
    @Setter
    public static class CategoryAndMenuResponseDto {
        private long categoryId;
        private String categoryName;

        private List<Menu> menus;
    }
}
