package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class TableDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class postList {
        private Long memberId;
        private List<TableDto.Post> tableList;
    }

    @Getter
    @Setter
    public static class Post {
        private int tableNumber;
        private String qrUrl;
        private String createdAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class patchList {
        private Long memberId;
        private List<TableDto.Patch> tableList;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private String qrUrl;
        private int beforeTableNumber;
        private int afterTableNumber;
    }

    @Getter
    @Setter
    public static class patchResponse {
        private Long tableId;
        private int tableNumber;
        private String qrData;
    }

    @Getter
    @Setter
    public static class getResponse {
        private Long tableId;
        private int tableNumber;
        private List<TableDto.getOrderResponse> orderList;
    }

    @Getter
    @Setter
    public static class getOrderResponse {
        private List<TableDto.getOrderMenuResponse> orderMenuList;
        private String message;
    }

    @Getter
    @Setter
    public static class getOrderMenuResponse {
        private Long menuId;
        private String menuName;
        private int price;
        private int quantity;
    }

    @Getter
    @Setter
    public static class getQrResponse {
        private Long tableId;
        private int tableNumber;
        private String qrUrl;
        private String createdAt;
    }

    @Getter
    @Setter
    public static class getTableResponse {
        private int tableNumber;
        private List<OrderDto.getOrderMenuResponse> orderList;
    }

    @Getter
    @Setter
    public static class deleteList {
        private List<TableDto.deleteTable> tableList;
    }

    @Getter
    @Setter
    public static class deleteTable {
        private int tableNumber;
    }

    @Getter
    @Setter
    public static class getTableOrderList {
        private Long orderId;
        private int tableNumber;
        private List<OrderMenuDto.postResponse> orderMenuList;
        private String createdAt;
        private String message;
    }
}