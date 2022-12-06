package com.example.demo.service;

import com.example.demo.entity.Member;
import com.example.demo.entity.Menu;
import com.example.demo.repository.*;
import com.example.demo.dto.OrderDto;
import com.example.demo.entity.Order;
import com.example.demo.entity.Table;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
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
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH시 mm분 ss초").withZone(ZoneId.of("Asia/Tokyo"));
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
        Order findOrder = orderRepository.save(order);

        String formatedNow = ZonedDateTime.now(ZoneId.of("Asia/Tokyo")).format(formatter);
        findOrder.setCreatedAt(formatedNow);

        return orderRepository.save(findOrder);
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
                response.setMenuImage(orderList.get(i).getOrderMenuList().get(j).getMenu().getMenuImage());
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

    public void updateOrder(Long orderId) {
        Optional<Order> order = orderRepository.findById(orderId);
        order.get().setCheckBox(false);
        orderRepository.save(order.get());
    }
}
