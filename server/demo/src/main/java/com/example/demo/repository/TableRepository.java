package com.example.demo.repository;

import com.example.demo.entity.Member;
import com.example.demo.entity.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableRepository extends JpaRepository<Table, Long> {
    List<Table> findAllByMember(Member member);
}