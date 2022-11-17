package com.example.demo.category.dto;

import com.example.demo.category.entity.Category;
import com.example.demo.menu.dto.MenuResponseDto;
import com.example.demo.menu.entity.Menu;
import com.example.demo.response.MultiResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryAndMenuResponseDto {
    private long categoryId;
    private Category.CategoryStatus categoryStatus;
    private String categoryName;
    private List<Menu> menus;
}
