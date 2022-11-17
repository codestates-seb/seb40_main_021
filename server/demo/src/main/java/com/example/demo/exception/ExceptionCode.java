package com.example.demo.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    TABLENUMBER_EXISTS(409, "TableNumber exists"),
    CALL_EXISTS(409, "Call exists"),
    EMAIL_AND_USER_EXISTS(409, "Email and User exist"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    TAG_NOT_FOUND(404, "Tag not found"),
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