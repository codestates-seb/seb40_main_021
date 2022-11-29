package com.example.demo.repository;

import com.example.demo.entity.Category;
import com.example.demo.entity.Member;
import com.example.demo.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    Optional<Menu> findByMenuName(String menuName);
    List<Menu> findAllByCategory(Category category);
    List<Menu> findAllByMember(Member member);
//    List<Menu> findByMenuNameContaining(String keyword);
}
