package com.example.demo.category.controller;

import com.example.demo.category.dto.CategoryPatchDto;
import com.example.demo.category.dto.CategoryPostDto;
//import com.example.demo.category.entity.Category;
//import com.example.demo.category.mapper.CategoryMapper;
//import com.example.demo.category.service.CategoryService;
//import com.example.demo.response.SingleResponseDto;
//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
import com.example.demo.category.dto.CategoryResponseDto;
import com.example.demo.category.dto.CategoryResponseDtos;
import com.example.demo.category.entity.Category;
import com.example.demo.category.mapper.CategoryMapper;
import com.example.demo.category.service.CategoryService;
import com.example.demo.menu.mapper.MenuMapper;
import com.example.demo.menu.service.MenuService;
import com.example.demo.response.MultiResponseDto;
import com.example.demo.response.SingleResponseDto;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/category")
@Validated
@Slf4j
@AllArgsConstructor
//@Api(tags = {"Category API"})
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {
    private CategoryService categoryService;
    private CategoryMapper categoryMapper;
    private MenuService menuService;
    private MenuMapper menuMapper;

//    public CategoryController(CategoryService categoryService, CategoryMapper categoryMapper){
//        this.categoryService = categoryService;
//        this.categoryMapper = categoryMapper;
//
//    }

    // 카테고리 등록
    @PostMapping("/write")
//    @ApiOperation(value = "카테고리등록", response = Category.class)
    public ResponseEntity postCategory(@Valid @RequestBody CategoryPostDto categoryPostDto){

        Category category = categoryMapper.categoryPostDtoToCategory(categoryPostDto);

        Category response = categoryService.createCategory(category);

        return new ResponseEntity<>(categoryMapper.categoryToCategoryResponseDto(response), HttpStatus.CREATED);
    }
    // 카테고리 수정
    @PatchMapping("/update/{category-id}")
    public ResponseEntity patchCategory(@PathVariable("category-id") @Positive long categoryId,
                                        @Valid @RequestBody CategoryPatchDto categoryPatchDto){

        categoryPatchDto.setCategoryId(categoryId);

        Category response = categoryService.updateCategory(categoryMapper.categoryPatchDtoToCategory(categoryPatchDto));

        return new ResponseEntity<>(categoryMapper.categoryToCategoryResponseDto(response), HttpStatus.OK);
    }
    // 특정 카테고리 조회
    @GetMapping("/{category-id}")
    public ResponseEntity getCategory(@PathVariable("category-id") @Positive long categoryId){
        Category category = categoryService.findCategory(categoryId);

//        return new ResponseEntity<>(categoryMapper.categoryToCategoryResponseDto(response), HttpStatus.OK);
        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        categoryMapper.categoryToCategoryAndMenuResponseDtos(menuService, menuMapper, category)),
                HttpStatus.OK);
    }
    // 모든 카테고리 조회
    @GetMapping
    public ResponseEntity getCategories(){
        List<Category> categories = categoryService.findCategories();

        List<CategoryResponseDtos> response = categories.stream()
                .map(category -> categoryMapper.categoryToCategoryResponseDtos(category)).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
//    @GetMapping
//    public ResponseEntity getCategories(@Positive @RequestParam int page,
//                                        @Positive @RequestParam int size){
//        Page<Category> pageCategories = categoryService.findCategories(page -1, size);
//        List<Category> categories = pageCategories.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(categoryMapper.categoriesToCategoryResponseDtos(categories),pageCategories),HttpStatus.OK);
//    }
    // 카테고리 삭제
    @DeleteMapping("/{category-id}")
    public ResponseEntity deleteCategory(@PathVariable("category-id") @Positive long categoryId){
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
