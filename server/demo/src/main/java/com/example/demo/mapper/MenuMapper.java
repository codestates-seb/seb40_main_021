package com.example.demo.mapper;

import com.example.demo.entity.Category;
import com.example.demo.dto.MenuDto;
import com.example.demo.entity.Member;
import com.example.demo.service.CategoryService;
import com.example.demo.entity.Menu;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MenuMapper {
    default Menu menuPostDtoToMenu(CategoryService categoryService, MenuDto.MenuPostDto menuPostDto){
        Menu menu = new Menu();
        Member member = new Member();
        member.setMemberId(menuPostDto.getMemberId());
        menu.setMenuName(menuPostDto.getMenuName());
        menu.setMenuContent(menuPostDto.getMenuContent());
        menu.setPrice(menuPostDto.getPrice());
        menu.setRecommendedMenu(menuPostDto.getRecommendedMenu());
//        menu.setVote(0);
        menu.setCategory(categoryService.findVerifiedCategory(menuPostDto.getCategoryId()));
        menu.setMember(member);

        return menu;
    }
    Menu menuPatchDtoToMenu(MenuDto.MenuPatchDto menuPatchDto);
    default MenuDto.MenuResponseDto menuToMenuResponseDto(Menu menu){
        MenuDto.MenuResponseDto menuResponseDto = new MenuDto.MenuResponseDto();
        menuResponseDto.setMemberId(menu.getMember().getMemberId());
        menuResponseDto.setMenuId(menu.getMenuId());
        menuResponseDto.setMenuName(menu.getMenuName());
        menuResponseDto.setMenuContent(menu.getMenuContent());
        menuResponseDto.setPrice(menu.getPrice());
//        menuResponseDto.setVote(menu.getVote());
        menuResponseDto.setCategoryId(menu.getCategory().getCategoryId());
        menuResponseDto.setRecommendedMenu(menu.getRecommendedMenu());
        menuResponseDto.setMenuImage(menu.getMenuImage());
        return menuResponseDto;
    }

    default List<Menu> menuPatchDtoToMenu(MenuDto.MenuPatchListDto menuPatchListDto) {

        List<Menu> menuList = new ArrayList<>();

        for(int i = 0; i < menuPatchListDto.getMenuList().size(); i++) {
            if(menuPatchListDto.getMenuList().get(i).getMenuId() != null) {
                Menu menu = new Menu();
                Category category = new Category();
                category.setCategoryId(menuPatchListDto.getMenuList().get(i).getCategoryId());
                Member member = new Member();
                member.setMemberId(menuPatchListDto.getMenuList().get(i).getMemberId());

                menu.setMenuId(menuPatchListDto.getMenuList().get(i).getMenuId());
                menu.setMenuName(menuPatchListDto.getMenuList().get(i).getMenuName());
                menu.setMenuContent(menuPatchListDto.getMenuList().get(i).getMenuContent());
                menu.setPrice(menuPatchListDto.getMenuList().get(i).getPrice());
                menu.setRecommendedMenu(menuPatchListDto.getMenuList().get(i).getRecommendedMenu());
                menu.setMenuImage(menuPatchListDto.getMenuList().get(i).getMenuImage());
                menu.setCategory(category);
                menu.setMember(member);

                menuList.add(menu);
            }
            else {
                Menu menu = new Menu();
                Category category = new Category();
                category.setCategoryId(menuPatchListDto.getMenuList().get(i).getCategoryId());
                Member member = new Member();
                member.setMemberId(menuPatchListDto.getMenuList().get(i).getMemberId());

                menu.setMenuName(menuPatchListDto.getMenuList().get(i).getMenuName());
                menu.setMenuContent(menuPatchListDto.getMenuList().get(i).getMenuContent());
                menu.setPrice(menuPatchListDto.getMenuList().get(i).getPrice());
                menu.setRecommendedMenu(menuPatchListDto.getMenuList().get(i).getRecommendedMenu());
                menu.setMenuImage(menuPatchListDto.getMenuList().get(i).getMenuImage());
                menu.setCategory(category);
                menu.setMember(member);

                menuList.add(menu);
            }
        }

        return menuList;
    }
}
