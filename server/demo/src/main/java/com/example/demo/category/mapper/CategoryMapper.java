package com.example.demo.category.mapper;

import com.example.demo.category.dto.*;
import com.example.demo.category.entity.Category;
import com.example.demo.menu.mapper.MenuMapper;
import com.example.demo.menu.service.MenuService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    default Category categoryPostDtoToCategory(/*UserSevice userService, */CategoryPostDto categoryPostDto){
        Category category = new Category();

//        question.setUser(userService.findUser(categoryPostDto.getUserId()));
        category.setCategoryName(categoryPostDto.getCategoryName());

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
        categoryResponseDto.setCategoryStatus(category.getCategoryStatus());
        categoryResponseDto.setCategoryName(category.getCategoryName());
        return categoryResponseDto;
    }
    default CategoryResponseDtos categoryToCategoryResponseDtos(Category category){
        if ( category == null ) {
            return null;
        }

        long categoryId = 0L;
        String categoryName = null;
        Category.CategoryStatus categoryStatus = null;

        categoryId = category.getCategoryId();
        categoryName = category.getCategoryName();
        categoryStatus = category.getCategoryStatus();

        CategoryResponseDtos categoryResponseDto = new CategoryResponseDtos( categoryId, categoryName, categoryStatus );

        return categoryResponseDto;
    }
    default CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService,
                                                                             MenuMapper menuMapper,
                                                                             Category category){
        CategoryAndMenuResponseDto categoryAndMenuResponseDto = new CategoryAndMenuResponseDto();
        categoryAndMenuResponseDto.setCategoryId(category.getCategoryId());
        categoryAndMenuResponseDto.setCategoryName(category.getCategoryName());
        categoryAndMenuResponseDto.setCategoryStatus(category.getCategoryStatus());
        categoryAndMenuResponseDto.setMenus(menuService.findMenus());
        return categoryAndMenuResponseDto;
    }
    List<CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories);
//    CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService, MenuMapper menuMapper, Category category);
}
