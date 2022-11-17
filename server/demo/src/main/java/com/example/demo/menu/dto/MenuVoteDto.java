package com.example.demo.menu.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class MenuVoteDto {
    @NotNull
    private int vote;
}
