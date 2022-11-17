package com.example.demo.category.mapper;

import com.example.demo.category.dto.*;
import com.example.demo.category.entity.Category;
import com.example.demo.menu.mapper.MenuMapper;
import com.example.demo.menu.service.MenuService;
import com.example.demo.user.entity.Member;
import com.example.demo.user.service.MemberService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    default Category categoryPostDtoToCategory(CategoryPostDto categoryPostDto){
        Category category = new Category();
        Member member = new Member();
        member.setId(categoryPostDto.getMemberId());
        category.setCategoryName(categoryPostDto.getCategoryName());
        category.setMember(member);

        return category;
    }
    Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto);
//    default Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto){
//        Category category = new Category();
//        category.setCategoryName(categoryPatchDto.getCategoryName());
//        return category;
//    }
    default CategoryResponseDto categoryToCategoryResponseDto(Category category){
        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
        categoryResponseDto.setCategoryId(category.getCategoryId());
        categoryResponseDto.setCategoryName(category.getCategoryName());
        return categoryResponseDto;
    }
    default CategoryResponseDtos categoryToCategoryResponseDtos(Category category){
        if ( category == null ) {
            return null;
        }

        long categoryId = 0L;
        String categoryName = null;

        categoryId = category.getCategoryId();
        categoryName = category.getCategoryName();

        CategoryResponseDtos categoryResponseDto = new CategoryResponseDtos( categoryId, categoryName);

        return categoryResponseDto;
    }
    default CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService,
                                                                             Category category){
        CategoryAndMenuResponseDto categoryAndMenuResponseDto = new CategoryAndMenuResponseDto();
        categoryAndMenuResponseDto.setCategoryId(category.getCategoryId());
        categoryAndMenuResponseDto.setCategoryName(category.getCategoryName());
        categoryAndMenuResponseDto.setMenus(menuService.findMenus());
        return categoryAndMenuResponseDto;
    }
    List<CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories);
//    CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService, MenuMapper menuMapper, Category category);
}
