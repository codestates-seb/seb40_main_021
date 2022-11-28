package com.example.demo.repository;

import com.example.demo.entity.Call;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CallRepository extends JpaRepository<Call, Long> {
    List<Call> findAllByMemberId(Long memberId);
}
