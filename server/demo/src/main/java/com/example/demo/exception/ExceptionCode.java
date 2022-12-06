package com.example.demo.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    TABLENUMBER_EXISTS(409, "TableNumber exists"),
    MENU_EXISTS(409, "Menu exists"),
    MEMBER_EXISTS(409, "Member exists"),
    CATEGORY_EXISTS(409, "Category exists"),
    CALL_EXISTS(409, "Call exists"),
    EMAIL_AND_USER_EXISTS(409, "Email and User exist"),
    CATEGORY_NOT_FOUND(404, "Category not found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    TABLE_NOT_FOUND(404, "Table not found"),
    MENU_NOT_FOUND(404, "Menu not found"),
    CANNOT_CHANGE_QUESTION(403, "Question can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}