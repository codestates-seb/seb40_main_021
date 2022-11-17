package com.example.demo.order.dto;

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
}
