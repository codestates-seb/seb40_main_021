package com.example.demo.order.repository;

import com.example.demo.order.entity.Order;
import com.example.demo.table.entity.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByTable(Table table);
    List<Order> findByTable(Table table);
}
