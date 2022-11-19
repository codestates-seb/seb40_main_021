package com.example.demo.order.service;

import com.example.demo.menu.entity.Menu;
import com.example.demo.menu.repository.MenuRepository;
import com.example.demo.order.dto.OrderDto;
import com.example.demo.order.entity.Order;
import com.example.demo.order.repository.OrderMenuRepository;
import com.example.demo.order.repository.OrderRepository;
import com.example.demo.table.entity.Table;
import com.example.demo.table.repository.TableRepository;
import com.example.demo.user.entity.Member;
import com.example.demo.user.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {

    private final TableRepository tableRepository;
    private final MenuRepository menuRepository;
    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final OrderMenuRepository orderMenuRepository;

    public Order createOrder(Order order, Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == order.getTable().getTableNumber())
                .collect(Collectors.toList());
        order.setTable(tableList.get(0));

        for(int i = 0; i < order.getOrderMenuList().size(); i++) {
            Optional<Menu> menu = menuRepository.findById(order.getOrderMenuList().get(i).getMenu().getMenuId());
            if(menu.isPresent()) {
                order.getOrderMenuList().get(i).setMenu(menu.get());
            }
        }
        return orderRepository.save(order);
    }

    public void deleteOrder(Long memberId, int tableNumber) {
        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        List<Order> orderList = orderRepository.findAllByTable(tableList.get(0));
        for(int i = 0; i < orderList.size(); i++) {
            orderRepository.delete(orderList.get(i));
        }
    }

    public List<OrderDto.getOrderMenuResponse> getOrderMenuResponseList(Long memberId, int tableNumber) {

        List<OrderDto.getOrderMenuResponse> list = new ArrayList<>();
        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        List<Order> orderList = tableList.get(0).getOrderList();
        for(int i = 0; i < orderList.size(); i++) {
            for(int j = 0; j < orderList.get(i).getOrderMenuList().size(); j++) {
                OrderDto.getOrderMenuResponse response = new OrderDto.getOrderMenuResponse();
                response.setMenuId(orderList.get(i).getOrderMenuList().get(j).getMenu().getMenuId());
                response.setMenuName(orderList.get(i).getOrderMenuList().get(j).getMenu().getMenuName());
                response.setPrice(orderList.get(i).getOrderMenuList().get(j).getMenu().getPrice());
                response.setQuantity(orderList.get(i).getOrderMenuList().get(j).getQuantity());
                list.add(response);
            }
        }
        list.sort(Comparator.comparing(OrderDto.getOrderMenuResponse::getMenuId));
        List<OrderDto.getOrderMenuResponse> findList = new ArrayList<>();
        if(list.size() == 0) {
            return findList;
        }
        findList.add(list.get(0));
        if(list.size() > 1) {
            for(int i = 1; i < list.size(); i++) {
                if(list.get(i).getMenuId() == findList.get(findList.size() - 1).getMenuId()) {
                    findList.get(findList.size() - 1)
                            .setQuantity(findList.get(findList.size() - 1).getQuantity() + list.get(i).getQuantity());
                }
                else {
                    findList.add(list.get(i));
                }
            }
        }
        return findList;
    }
}
