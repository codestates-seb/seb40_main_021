package com.example.demo.call.repository;

import com.example.demo.call.entity.Call;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CallRepository extends JpaRepository<Call, Long> {
    List<Call> findAllByMemberId(Long memberId);
}
