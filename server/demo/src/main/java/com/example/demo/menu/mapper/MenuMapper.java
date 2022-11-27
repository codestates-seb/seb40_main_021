package com.example.demo.menu.mapper;

import com.example.demo.category.entity.Category;
import com.example.demo.category.service.CategoryService;
import com.example.demo.menu.dto.MenuPatchDto;
import com.example.demo.menu.dto.MenuPatchListDto;
import com.example.demo.menu.dto.MenuPostDto;
import com.example.demo.menu.dto.MenuResponseDto;
import com.example.demo.menu.entity.Menu;
import com.example.demo.user.entity.Member;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MenuMapper {
    default Menu menuPostDtoToMenu(CategoryService categoryService, MenuPostDto menuPostDto){
        Menu menu = new Menu();
        Member member = new Member();
        member.setId(menuPostDto.getMemberId());
        menu.setMenuName(menuPostDto.getMenuName());
        menu.setMenuContent(menuPostDto.getMenuContent());
        menu.setPrice(menuPostDto.getPrice());
        menu.setRecommendedMenu(menuPostDto.getRecommendedMenu());
//        menu.setVote(0);
        menu.setCategory(categoryService.findVerifiedCategory(menuPostDto.getCategoryId()));
        menu.setMember(member);

        return menu;
    }
    Menu menuPatchDtoToMenu(MenuPatchDto menuPatchDto);
    default MenuResponseDto menuToMenuResponseDto(Menu menu){
        MenuResponseDto menuResponseDto = new MenuResponseDto();
        menuResponseDto.setMemberId(menu.getMember().getId());
        menuResponseDto.setMenuId(menu.getMenuId());
        menuResponseDto.setMenuName(menu.getMenuName());
        menuResponseDto.setMenuContent(menu.getMenuContent());
        menuResponseDto.setPrice(menu.getPrice());
//        menuResponseDto.setVote(menu.getVote());
        menuResponseDto.setCategoryId(menu.getCategory().getCategoryId());
        menuResponseDto.setRecommendedMenu(menu.getRecommendedMenu());
        return menuResponseDto;
    }
    List<MenuResponseDto> menusToMenuResponseDtos(List<Menu> menus);

    default List<Menu> menuPatchDtoToMenu(MenuPatchListDto menuPatchListDto) {

        List<Menu> menuList = new ArrayList<>();

        for(int i = 0; i < menuPatchListDto.getMenuList().size(); i++) {
            if(menuPatchListDto.getMenuList().get(i).getMenuId() != null) {
                Menu menu = new Menu();
                Category category = new Category();
                category.setCategoryId(menuPatchListDto.getMenuList().get(i).getCategoryId());
                Member member = new Member();
                member.setId(menuPatchListDto.getMenuList().get(i).getMemberId());

                menu.setMenuId(menuPatchListDto.getMenuList().get(i).getMenuId());
                menu.setMenuName(menuPatchListDto.getMenuList().get(i).getMenuName());
                menu.setMenuContent(menuPatchListDto.getMenuList().get(i).getMenuContent());
                menu.setPrice(menuPatchListDto.getMenuList().get(i).getPrice());
                menu.setRecommendedMenu(menuPatchListDto.getMenuList().get(i).getRecommendedMenu());
                menu.setCategory(category);
                menu.setMember(member);

                menuList.add(menu);
            }
            else {
                Menu menu = new Menu();
                Category category = new Category();
                category.setCategoryId(menuPatchListDto.getMenuList().get(i).getCategoryId());
                Member member = new Member();
                member.setId(menuPatchListDto.getMenuList().get(i).getMemberId());

                menu.setMenuName(menuPatchListDto.getMenuList().get(i).getMenuName());
                menu.setMenuContent(menuPatchListDto.getMenuList().get(i).getMenuContent());
                menu.setPrice(menuPatchListDto.getMenuList().get(i).getPrice());
                menu.setRecommendedMenu(menuPatchListDto.getMenuList().get(i).getRecommendedMenu());
                menu.setCategory(category);
                menu.setMember(member);

                menuList.add(menu);
            }
        }

        return menuList;
    }
}
