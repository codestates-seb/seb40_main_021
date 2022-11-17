package com.example.demo.order.entity;

import com.example.demo.menu.entity.Menu;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderMenuId;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "ORDER_ID")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "MENU_ID")
    private Menu menu;

//    public void addOrder(Order order) {
//        this.order = order;
//        if (!this.order.getOrderMenuList().contains(this)) {
//            this.order.getOrderMenuList().add(this);
//        }
//    }
//
//    public void addMenu(Menu menu) {
//        this.menu = menu;
//        if (!this.menu.getOrderMenuList().contains(this)) {
//            this.menu.addOrderMenu(this);
//        }
//    }
}