package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class OrderDto {
    @Getter
    public static class Post {
        private int tableNumber;
        private List<OrderMenuDto.Post> orderMenus;
        private String message;
    }

    @Getter
    @Setter
    public static class postResponse {
        private Long orderId;
        private Long tableId;
        private int tableNumber;
        private List<OrderMenuDto.postResponse> orderMenuList;
        private String message;
    }

    @Getter
    @Setter
    public static class getResponse {
        List<OrderDto.getOrderMenuResponse> orderMenuResponseList;
    }

    @Getter
    @Setter
    public static class getOrderMenuResponse {
        private Long menuId;
        private String menuName;
        private int price;
        private int quantity;
        private String menuImage;
    }
}
