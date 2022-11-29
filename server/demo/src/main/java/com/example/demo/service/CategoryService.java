package com.example.demo.service;

import com.example.demo.entity.Category;
import com.example.demo.entity.Member;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CategoryService{
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;


    // 카테고리 생성 서비스
    public Category createCategory(Category category){

        Optional<Member> member = memberRepository.findById(category.getMember().getMemberId());
        verifyExistsCategory(member.get(), category);
        category.setMember(member.get());

        return categoryRepository.save(category);
    }
    // 카테고리 수정 서비스
    public Category updateCategory(Category category){

        Category findCategory = findVerifiedCategory(category.getCategoryId());

        Optional.ofNullable(category.getCategoryName())
                .ifPresent(categoryName -> findCategory.setCategoryName(categoryName));

        return categoryRepository.save(findCategory);
    }

    // 특정 카테고리 조회 서비스
    public Category findCategory(long categoryId){

        return findVerifiedCategory(categoryId);
    }

    // 모든 카테고리 조회 서비스
    public List<Category> findCategories(Long memberId){
        Optional<Member> member = memberRepository.findById(memberId);
        List<Category> categoryList = categoryRepository.findAllByMember(member.get());
        return categoryList;
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
    private void verifyExistsCategory(Member member, Category category){

        List<Category> categoryList = categoryRepository.findAllByMember(member)
                .stream().filter(findCategory -> findCategory.getCategoryName() == category.getCategoryName())
                .collect(Collectors.toList());

        if (categoryList.size() > 0)
            throw new BusinessLogicException(ExceptionCode.CATEGORY_EXISTS);
    }
}