package com.example.demo.menu.mapper;

import com.example.demo.category.service.CategoryService;
import com.example.demo.menu.dto.MenuPatchDto;
import com.example.demo.menu.dto.MenuPostDto;
import com.example.demo.menu.dto.MenuResponseDto;
import com.example.demo.menu.entity.Menu;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MenuMapper {
    default Menu menuPostDtoToMenu(CategoryService categoryService, MenuPostDto menuPostDto){
        Menu menu = new Menu();
        menu.setMenuName(menuPostDto.getMenuName());
        menu.setMenuContent(menuPostDto.getMenuContent());
        menu.setPrice(menuPostDto.getPrice());
        menu.setVote(0);
        menu.setCategory(categoryService.findVerifiedCategory(menuPostDto.getCategoryId()));

        return menu;
    }
    Menu menuPatchDtoToMenu(MenuPatchDto menuPatchDto);
    default MenuResponseDto menuToMenuResponseDto(Menu menu){
        MenuResponseDto menuResponseDto = new MenuResponseDto();
        menuResponseDto.setMenuId(menu.getMenuId());
        menuResponseDto.setMenuName(menu.getMenuName());
        menuResponseDto.setMenuContent(menu.getMenuContent());
        menuResponseDto.setPrice(menu.getPrice());
        menuResponseDto.setVote(menu.getVote());
        menuResponseDto.setCategoryId(menu.getCategory().getCategoryId());
        return menuResponseDto;
    }
    List<MenuResponseDto> menusToMenuResponseDtos(List<Menu> menus);
}
