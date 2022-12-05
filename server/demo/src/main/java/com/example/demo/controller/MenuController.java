package com.example.demo.controller;

import com.example.demo.dto.MenuDto;
import com.example.demo.service.CategoryService;
import com.example.demo.dto.SingleResponseDto;
import com.example.demo.entity.Menu;
import com.example.demo.mapper.MenuMapper;
import com.example.demo.service.MenuService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/menu")
@Validated
@Slf4j
@AllArgsConstructor
public class MenuController {
    private MenuService menuService;
    private MenuMapper menuMapper;
    private CategoryService categoryService;

    //메뉴 등록, 수정, 삭제
    @PatchMapping("/{category-id}")
    public ResponseEntity patchMenu(@PathVariable("category-id") @Positive Long categoryId,
                                    @Valid @RequestBody MenuDto.MenuPatchListDto menuPatchListDto){
        menuService.putMenu(categoryId, menuMapper.menuPatchDtoToMenu(menuPatchListDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //특정 메뉴조회
    @GetMapping("/{menu-id}")
    public ResponseEntity getMenu(@PathVariable("menu-id")@Positive long menuId){
        Menu menu = menuService.findMenu(menuId);
        return new ResponseEntity<>(new SingleResponseDto<>(menuMapper.menuToMenuResponseDto(menu)), HttpStatus.OK);
    }

    @GetMapping("/search/{member-id}")
    public ResponseEntity searchMenu(@PathVariable("member-id") @Positive long memberId, String keyword){
        List<Menu> searchList = menuService.search(memberId, keyword);
        return new ResponseEntity<>(new SingleResponseDto<>(searchList), HttpStatus.OK);

    }
}
