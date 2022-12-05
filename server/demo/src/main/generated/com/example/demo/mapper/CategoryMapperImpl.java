package com.example.demo.mapper;

import com.example.demo.dto.CategoryDto;
import com.example.demo.entity.Category;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T14:59:25+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public Category categoryPatchDtoToCategory(CategoryDto.CategoryPatchDto categoryPatchDto) {
        if ( categoryPatchDto == null ) {
            return null;
        }

        Category category = new Category();

        category.setCategoryId( categoryPatchDto.getCategoryId() );
        category.setCategoryName( categoryPatchDto.getCategoryName() );

        return category;
    }

    @Override
    public List<CategoryDto.CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories) {
        if ( categories == null ) {
            return null;
        }

        List<CategoryDto.CategoryResponseDto> list = new ArrayList<CategoryDto.CategoryResponseDto>( categories.size() );
        for ( Category category : categories ) {
            list.add( categoryToCategoryResponseDto( category ) );
        }

        return list;
    }
}
