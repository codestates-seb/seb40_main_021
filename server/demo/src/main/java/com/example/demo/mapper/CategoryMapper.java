package com.example.demo.mapper;

import com.example.demo.dto.CategoryDto;
import com.example.demo.entity.Category;
import com.example.demo.entity.Member;
import com.example.demo.service.MenuService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    default Category categoryPostDtoToCategory(CategoryDto.CategoryPostDto categoryPostDto){
        Category category = new Category();
        Member member = new Member();
        member.setMemberId(categoryPostDto.getMemberId());
        category.setCategoryName(categoryPostDto.getCategoryName());
        category.setMember(member);

        return category;
    }
    Category categoryPatchDtoToCategory(CategoryDto.CategoryPatchDto categoryPatchDto);
//    default Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto){
//        Category category = new Category();
//        category.setCategoryName(categoryPatchDto.getCategoryName());
//        return category;
//    }
    default CategoryDto.CategoryResponseDto categoryToCategoryResponseDto(Category category){
        CategoryDto.CategoryResponseDto categoryResponseDto = new CategoryDto.CategoryResponseDto();
        categoryResponseDto.setCategoryId(category.getCategoryId());
        categoryResponseDto.setCategoryName(category.getCategoryName());
        return categoryResponseDto;
    }
    default CategoryDto.CategoryResponseDtos categoryToCategoryResponseDtos(Category category){
        if ( category == null ) {
            return null;
        }

        long categoryId = 0L;
        String categoryName = null;

        categoryId = category.getCategoryId();
        categoryName = category.getCategoryName();

        CategoryDto.CategoryResponseDtos categoryResponseDto = new CategoryDto.CategoryResponseDtos( categoryId, categoryName);

        return categoryResponseDto;
    }
    default CategoryDto.CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService,
                                                                             Category category){
        CategoryDto.CategoryAndMenuResponseDto categoryAndMenuResponseDto = new CategoryDto.CategoryAndMenuResponseDto();
        categoryAndMenuResponseDto.setCategoryId(category.getCategoryId());
        categoryAndMenuResponseDto.setCategoryName(category.getCategoryName());
        categoryAndMenuResponseDto.setMenus(menuService.findMenus(category.getCategoryId()));
        return categoryAndMenuResponseDto;
    }
    List<CategoryDto.CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories);
//    CategoryAndMenuResponseDto categoryToCategoryAndMenuResponseDtos(MenuService menuService, MenuMapper menuMapper, Category category);
}
