package com.example.demo.mapper;

import com.example.demo.entity.Menu;
import com.example.demo.dto.OrderDto;
import com.example.demo.dto.OrderMenuDto;
import com.example.demo.entity.Order;
import com.example.demo.entity.OrderMenu;
import com.example.demo.entity.Table;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    default Order orderPostDtoToOrder(OrderDto.Post requestBody) {
        Table table = new Table();
        table.setTableNumber(requestBody.getTableNumber());

        Order order = new Order();
        order.setTable(table);

        List<OrderMenu> orderMenuList = new ArrayList<>();
        for(int i = 0; i < requestBody.getOrderMenus().size(); i++) {
            Menu menu = new Menu();
            menu.setMenuId(requestBody.getOrderMenus().get(i).getMenuId());

            OrderMenu orderMenu = new OrderMenu();
            orderMenu.setMenu(menu);
            orderMenu.setQuantity(requestBody.getOrderMenus().get(i).getQuantity());
            orderMenu.setOrder(order);
            orderMenuList.add(orderMenu);
        }
        order.setOrderMenuList(orderMenuList);
        order.setMessage(requestBody.getMessage());

        return order;
    }

    default OrderDto.postResponse orderToOrderPostResponseDto(Order order) {
        OrderDto.postResponse response = new OrderDto.postResponse();
        List<OrderMenu> orderMenuList = order.getOrderMenuList();

        response.setOrderId(order.getOrderId());
        response.setTableId(order.getTable().getTableId());
        response.setTableNumber(order.getTable().getTableNumber());
        response.setOrderMenuList(orderMenuToOrderMenuPostResponseDto(orderMenuList));
        response.setMessage(order.getMessage());

        return response;
    }

    default List<OrderMenuDto.postResponse> orderMenuToOrderMenuPostResponseDto(List<OrderMenu> orderMenuList) {
        List<OrderMenuDto.postResponse> responses = new ArrayList<>();
        for(int i = 0; i < orderMenuList.size(); i++) {
            OrderMenuDto.postResponse postResponse = new OrderMenuDto.postResponse();
            postResponse.setMenuId(orderMenuList.get(i).getMenu().getMenuId());
            postResponse.setQuantity(orderMenuList.get(i).getQuantity());
            postResponse.setMenuName(orderMenuList.get(i).getMenu().getMenuName());
            postResponse.setPrice(orderMenuList.get(i).getMenu().getPrice());
            responses.add(postResponse);
        }
        return responses;
    }
}
