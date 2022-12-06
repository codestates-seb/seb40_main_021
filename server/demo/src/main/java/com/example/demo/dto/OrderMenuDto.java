package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class OrderMenuDto {
    @Getter
    public static class Post {
        private Long menuId;
        private int quantity;
    }

    @Getter
    @Setter
    public static class postResponse {
        private Long menuId;
        private int quantity;
        private String menuName;
        private int price;
    }
}
