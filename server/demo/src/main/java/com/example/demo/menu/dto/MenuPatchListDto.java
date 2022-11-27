package com.example.demo.menu.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MenuPatchListDto {
    private List<MenuPatchDto> menuList;
}
