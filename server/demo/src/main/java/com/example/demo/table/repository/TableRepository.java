package com.example.demo.table.repository;

import com.example.demo.table.entity.Table;
import com.example.demo.user.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableRepository extends JpaRepository<Table, Long> {
    List<Table> findAllByMember(Member member);
}