package com.example.demo.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "CALLS")
@Getter
@Setter
@NoArgsConstructor
public class Call extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long callId;

    @Column
    private Long memberId;

    @Column
    private int tableNumber;

    @Column
    private String createdAt;
}
