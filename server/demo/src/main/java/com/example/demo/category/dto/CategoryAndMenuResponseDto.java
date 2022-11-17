package com.example.demo.category.dto;

import com.example.demo.menu.entity.Menu;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryAndMenuResponseDto {
    private long categoryId;
    private String categoryName;
    private List<Menu> menus;
}
