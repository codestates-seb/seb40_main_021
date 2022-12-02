package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CallDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private Long memberId;
        private int tableNumber;
    }

    @Getter
    @Setter
    public static class Response {
        private Long callId;
        private Long memberId;
        private int tableNumber;
    }
}
