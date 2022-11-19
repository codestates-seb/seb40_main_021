package com.example.demo.menu.controller;

import com.example.demo.category.service.CategoryService;
import com.example.demo.dto.SingleResponseDto;
import com.example.demo.menu.dto.MenuVoteDto;
import com.example.demo.menu.dto.MenuPatchDto;
import com.example.demo.menu.dto.MenuPostDto;
import com.example.demo.menu.entity.Menu;
import com.example.demo.menu.mapper.MenuMapper;
import com.example.demo.menu.service.MenuService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping(value = "/menu")
@Validated
@Slf4j
@AllArgsConstructor
public class MenuController {
    private MenuService menuService;
    private MenuMapper menuMapper;
    private CategoryService categoryService;
    //메뉴 등록
    @PostMapping("/write")
    public ResponseEntity postMenu(@Valid @RequestBody MenuPostDto menuPostDto){
        Menu menu = menuMapper.menuPostDtoToMenu(categoryService, menuPostDto);
        Menu response = menuService.createMenu(menu);

        return new ResponseEntity<>(menuMapper.menuToMenuResponseDto(response), HttpStatus.CREATED);
    }
    //메뉴 수정
    @PatchMapping("/update/{menu-id}")
    public ResponseEntity patchMenu(@PathVariable("menu-id") @Positive long menuId,
                                    @Valid @RequestBody MenuPatchDto menuPatchDto){
        menuPatchDto.setMenuId(menuId);

        Menu response = menuService.updateMenu(menuMapper.menuPatchDtoToMenu(menuPatchDto));

        return new ResponseEntity<>(menuMapper.menuToMenuResponseDto(response),HttpStatus.OK);
    }
    //좋아요 기능
    @PatchMapping("/vote/{menu-id}")
    public ResponseEntity voteMenu(@PathVariable("menu-id") @Positive @NotNull long menuId,
                                   @Valid @RequestBody MenuVoteDto menuvoteDto){
        Menu likeMenu = menuService.voteMenu(menuId, menuvoteDto.getVote());
        return new ResponseEntity<>(new SingleResponseDto<>(menuMapper.menuToMenuResponseDto(likeMenu)), HttpStatus.OK);
    }
    //특정 메뉴조회
    @GetMapping("/{menu-id}")
    public ResponseEntity getMenu(@PathVariable("menu-id")@Positive long menuId){
        Menu menu = menuService.findMenu(menuId);
        return new ResponseEntity<>(new SingleResponseDto<>(menuMapper.menuToMenuResponseDto(menu)), HttpStatus.OK);
    }
    // 모든 메뉴 조회
//    @GetMapping
//    public ResponseEntity getMenus(){
//        List<Menu> menus = menuService.findMenus();
//        List<MenuResponseDto> response = menus.stream()
//                .map(menu -> menuMapper.menuToMenuResponseDto(menu))
//                .collect(Collectors.toList());
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
    // 메뉴 삭제
    @DeleteMapping("/{menu-id}")
    public ResponseEntity deleteMenu(@PathVariable("menu-id") @Positive long menuId){
        menuService.deleteMenu(menuId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/search/{member-id}")
    public ResponseEntity searchMenu(@PathVariable("member-id") @Positive long memberId, String keyword){
        List<Menu> searchList = menuService.search(memberId, keyword);
//        model.addAttribute("searchList", searchList);
        return new ResponseEntity<>(new SingleResponseDto<>(searchList), HttpStatus.OK);

    }
//    @GetMapping("/search")
//    public ResponseEntity searchMenu(String keyword, Model model){
//        List<Menu> searchList = menuService.search(keyword);
//        model.addAttribute("searchList", searchList);
//        return new ResponseEntity<>(searchList, HttpStatus.OK);
//
//    }
}
