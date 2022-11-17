package com.example.demo.table.entity;

import com.example.demo.order.entity.Order;
import com.example.demo.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "TABLES")
@Getter
@Setter
@NoArgsConstructor
public class Table {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;

    @Column
    private int tableNumber;

    @Column
    private String qrUrl;

    @Column
    private String createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "table")
    private List<Order> orderList = new ArrayList<>();
}