package com.example.demo.menu.service;

import com.example.demo.category.repository.CategoryRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.menu.entity.Menu;
import com.example.demo.menu.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    private final MenuRepository menuRepository;
    private final CategoryRepository categoryRepository;

    public MenuService(MenuRepository menuRepository, CategoryRepository categoryRepository){
        this.menuRepository = menuRepository;
        this.categoryRepository = categoryRepository;
    }
    //메뉴 생성
    public Menu createMenu(Menu menu){
        verifyExistsMenu(menu.getMenuName());
        return menuRepository.save(menu);
    }
    // 메뉴 업데이트
    public Menu updateMenu(Menu menu){
        Menu findMenu = findVerifiedMenu(menu.getMenuId());
        Optional.ofNullable(menu.getMenuName())
                .ifPresent(menuName ->  findMenu.setMenuName(menuName));
        Optional.ofNullable(menu.getMenuContent())
                .ifPresent(menuContent ->  findMenu.setMenuContent(menuContent));
        Optional.ofNullable(menu.getPrice())
                .ifPresent(price ->  findMenu.setPrice(price));
        return menuRepository.save(findMenu);
    }
    // 특정 메뉴조회
    public Menu findMenu(long menuId){
        return findVerifiedMenu(menuId);
    }
    // 모든 메뉴 조회
    public List<Menu> findMenus(){
        return menuRepository.findAll();
    }
   // 삭제 서비스
    public void deleteMenu(long menuId){
        Menu findMenu = findVerifiedMenu(menuId);
        menuRepository.delete(findMenu);
    }
    //좋아요 서비스
    public Menu voteMenu(long menuId, int vote){
        Menu findMenu = findVerifiedMenu(menuId);
        findMenu.setVote(vote);
        return menuRepository.save(findMenu);
    }
    public Menu findVerifiedMenu(long menuId){
        Optional<Menu> optionalMenu = menuRepository.findById(menuId);
        Menu findMenu = optionalMenu.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MENU_NOT_FOUND));
        return findMenu;
    }
    private void verifyExistsMenu(String menuName){
        Optional<Menu> menu = menuRepository.findByMenuName(menuName);
        if (menu.isPresent())
            throw new BusinessLogicException(ExceptionCode.MENU_EXISTS);
    }
}
