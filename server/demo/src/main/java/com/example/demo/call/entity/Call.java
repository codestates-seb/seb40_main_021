package com.example.demo.call.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "CALLS")
@Getter
@Setter
@NoArgsConstructor
public class Call {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long callId;

    @Column
    private Long memberId;

    @Column
    private int tableNumber;
}
