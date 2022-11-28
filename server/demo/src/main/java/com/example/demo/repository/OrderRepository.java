package com.example.demo.repository;

import com.example.demo.entity.Order;
import com.example.demo.entity.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByTable(Table table);
    List<Order> findByTable(Table table);
}
