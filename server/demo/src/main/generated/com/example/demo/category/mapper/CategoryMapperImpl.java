package com.example.demo.category.mapper;

import com.example.demo.category.dto.CategoryPatchDto;
import com.example.demo.category.dto.CategoryResponseDto;
import com.example.demo.category.entity.Category;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-21T12:00:35+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public Category categoryPatchDtoToCategory(CategoryPatchDto categoryPatchDto) {
        if ( categoryPatchDto == null ) {
            return null;
        }

        Category category = new Category();

        category.setCategoryId( categoryPatchDto.getCategoryId() );
        category.setCategoryName( categoryPatchDto.getCategoryName() );

        return category;
    }

    @Override
    public List<CategoryResponseDto> categoriesToCategoryResponseDtos(List<Category> categories) {
        if ( categories == null ) {
            return null;
        }

        List<CategoryResponseDto> list = new ArrayList<CategoryResponseDto>( categories.size() );
        for ( Category category : categories ) {
            list.add( categoryToCategoryResponseDto( category ) );
        }

        return list;
    }
}
