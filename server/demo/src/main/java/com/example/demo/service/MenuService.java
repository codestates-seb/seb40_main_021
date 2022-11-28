package com.example.demo.service;

import com.example.demo.entity.Category;
import com.example.demo.entity.Member;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.entity.Menu;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MenuService {
    private final MenuRepository menuRepository;
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;

    public MenuService(MenuRepository menuRepository, CategoryRepository categoryRepository, MemberRepository memberRepository){
        this.menuRepository = menuRepository;
        this.categoryRepository = categoryRepository;
        this.memberRepository = memberRepository;
    }

    //메뉴 생성
    public Menu createMenu(Menu menu){
        verifyExistsMenu(menu);
        Optional<Member> member = memberRepository.findById(menu.getMember().getMemberId());
        menu.setMember(member.get());
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
    public List<Menu> findMenus(Long categoryId){
        Optional<Category> category = categoryRepository.findById(categoryId);
        List<Menu> menus = menuRepository.findAllByCategory(category.get()).stream()
                .collect(Collectors.toList());
        return menus;
    }

   // 삭제 서비스
    public void deleteMenu(long menuId){
        Menu findMenu = findVerifiedMenu(menuId);
        menuRepository.delete(findMenu);
    }

    //검색 서비스
    public List<Menu> search(Long memberId, String keyword){
        Optional<Member> member = memberRepository.findById(memberId);
        List<Menu> menuList = menuRepository.findAllByMember(member.get()).stream()
                .filter(menu -> menu.getMenuName().contains(keyword) == true)
                .collect(Collectors.toList());
        return menuList;
    }

    public Menu findVerifiedMenu(long menuId){
        Optional<Menu> optionalMenu = menuRepository.findById(menuId);
        Menu findMenu = optionalMenu.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MENU_NOT_FOUND));
        return findMenu;
    }
    private void verifyExistsMenu(Menu menu){
        List<Menu> menuList = menuRepository.findAllByCategory(menu.getCategory())
                .stream().filter(findMenu -> findMenu.getMenuName() == menu.getMenuName())
                .collect(Collectors.toList());

        if (menuList.size() > 0)
            throw new BusinessLogicException(ExceptionCode.MENU_EXISTS);
    }

    // 메뉴 등록, 수정, 삭제
    public void putMenu(Long categoryId, List<Menu> menuList) {

        Optional<Category> category = categoryRepository.findById(categoryId);

        if(menuList.size() == 0) {
            List<Menu> menus = menuRepository.findAllByCategory(category.get());
            menuRepository.deleteAll(menus);
            return;
        }

        Optional<Member> member = memberRepository.findById(menuList.get(0).getMember().getMemberId());
        List<Menu> findMenuList = menuRepository.findAllByCategory(category.get());

        for(int i = 0; i < findMenuList.size(); i++) {
            int count = 0;
            for(int j = 0; j < menuList.size(); j++) {
                if(findMenuList.get(i).getMenuId() != menuList.get(j).getMenuId()) {
                    count += 1;
                }
            }
            if(count == menuList.size()) {
                menuRepository.delete(findMenuList.get(i));
            }
        }

        for(int i = 0; i < menuList.size(); i++) {
            menuList.get(i).setCategory(category.get());
            menuList.get(i).setMember(member.get());

            menuRepository.save(menuList.get(i));
        }
    }
}
