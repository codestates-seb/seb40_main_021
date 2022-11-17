package com.example.demo.order.entity;

import com.example.demo.table.entity.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "ORDERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(columnDefinition = "TEXT")
    private String message;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TABLE_ID")
    private Table table;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderMenu> orderMenuList = new ArrayList<>();
    // PERSIST에서 REMOVE로 바꿔줘보았다. 이유는 ORDER를 삭제했을때 에러가 나기 때문이다. REMOVE로 바꿔주니 ORDER를
    // post했을때 ORDERMENU가 DB에 저장이 안되었다. ALL로 바꿔주었더니 ORDERMENU도 잘 저장이 되고 DELETE도 잘 된다!
}