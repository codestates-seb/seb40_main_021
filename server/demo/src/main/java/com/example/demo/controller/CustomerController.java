package com.example.demo.controller;

import com.example.demo.dto.CategoryDto;
import com.example.demo.dto.SingleResponseDto;
import com.example.demo.entity.Category;
import com.example.demo.entity.Member;
import com.example.demo.mapper.CategoryMapper;
import com.example.demo.mapper.MemberMapper;
import com.example.demo.service.CategoryService;
import com.example.demo.service.MemberService;
import com.example.demo.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/customer")
@Validated
@AllArgsConstructor
public class CustomerController {

    private final CategoryService categoryService;
    private final CategoryMapper categoryMapper;
    private final MenuService menuService;
    private final MemberService memberService;
    private final MemberMapper mapper;

    // 모든 카테고리 조회
    @GetMapping("/category/{member-id}")
    public ResponseEntity getCategories(@PathVariable("member-id") @Positive Long memberId){

        List<Category> categories = categoryService.findCategories(memberId);

        List<CategoryDto.CategoryResponseDtos> response = categories.stream()
                .map(category -> categoryMapper.categoryToCategoryResponseDtos(category)).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 특정 카테고리 조회
    @GetMapping("/category/read/{category-id}")
    public ResponseEntity getCategory(@PathVariable("category-id") @Positive long categoryId){
        Category category = categoryService.findCategory(categoryId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        categoryMapper.categoryToCategoryAndMenuResponseDtos(menuService, category)),
                HttpStatus.OK);
    }

    //가게 정보 조회
    @GetMapping("/member/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
                , HttpStatus.OK);
    }
}
