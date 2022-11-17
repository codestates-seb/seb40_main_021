package com.example.demo.category.service;

import com.example.demo.category.entity.Category;
import com.example.demo.category.repository.CategoryRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//import com.example.demo.category.entity.Category;
//import com.example.demo.category.repository.CategoryRepository;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CategoryService {
//    private final CategoryRepository categoryRepository;
//
//    public CategoryService(CategoryRepository categoryRepository){
//        this.categoryRepository = categoryRepository;
//    }
//    //카테고리 생성 서비스
//    public Category createCategory(Category category){
//        return categoryRepository.save(category);
//    }
//}
@Service
public class CategoryService{
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    // 카테고리 생성 서비스
    public Category createCategory(Category category){
//        Category createdCategory = category;
//        return createdCategory;
        verifyExistsCategory(category.getCategoryName());
        return categoryRepository.save(category);
    }
    // 카테고리 수정 서비스
    public Category updateCategory(Category category){
//        Category updatedCategory = category;
//        return updatedCategory;
        Category findCategory = findVerifiedCategory(category.getCategoryId());

        Optional.ofNullable(category.getCategoryName())
                .ifPresent(categoryName -> findCategory.setCategoryName(categoryName));
//        Optional.ofNullable(category.getCategoryStatus())
//                .ifPresent(categoryStatus -> findCategory.setCategoryStatus(categoryStatus));
        return categoryRepository.save(findCategory);
    }
    //public Category updateCategory(Category category){
//    Category findCategory = findVerifiedCategory(category.getCategoryId());
//    findCategory.setCategoryName(category.getCategoryName());
//    return categoryRepository.save(findCategory);
//}
    // 특정 카테고리 조회 서비스
    public Category findCategory(long categoryId){
//        Category category = new Category("탕");
//        return category;
        return findVerifiedCategory(categoryId);
    }
    // 모든 카테고리 조회 서비스
//    public Page<Category> findCategories(int page, int size){
//
//        return categoryRepository.findAll(PageRequest.of(page, size, Sort.by("categoryId").descending()));
//    }
    public List<Category> findCategories(){
        return categoryRepository.findAll();
    }
    // 특정 카테고리 삭제 서비스
    public void deleteCategory(long categoryId){
        Category findCategory = findVerifiedCategory(categoryId);
        categoryRepository.delete(findCategory);
    }

    //이미 존재하는 카테고리인지 검증
    public Category findVerifiedCategory(long categoryId){
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        Category findCategory = optionalCategory.orElseThrow(() -> new BusinessLogicException(ExceptionCode.CATEGORY_NOT_FOUND));
        return findCategory;
    }
    //이미 등록된 카테고리인지 검증
    private void verifyExistsCategory(String categoryName){
        Optional<Category> category = categoryRepository.findByCategoryName(categoryName);
        if (category.isPresent())
            throw new BusinessLogicException(ExceptionCode.CATEGORY_EXISTS);
    }
}