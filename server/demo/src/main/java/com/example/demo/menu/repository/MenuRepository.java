package com.example.demo.menu.repository;

import com.example.demo.category.entity.Category;
import com.example.demo.menu.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    Optional<Menu> findByMenuName(String menuName);
    List<Menu> findAllByCategory(Category category);
}