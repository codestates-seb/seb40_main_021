package com.example.demo.order.controller;

import com.example.demo.dto.SingleResponseDto;
import com.example.demo.menu.dto.MenuDto;
import com.example.demo.menu.entity.Menu;
import com.example.demo.order.dto.OrderDto;
import com.example.demo.order.entity.Order;
import com.example.demo.order.mapper.OrderMapper;
import com.example.demo.order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/order")
@Validated
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderMapper mapper;

    @PostMapping("/{user-id}")
    public ResponseEntity postOrder(@PathVariable("user-id") @Positive Long userId,
                                    @Valid @RequestBody OrderDto.Post requestBody) {
        Order order = orderService.createOrder(mapper.orderPostDtoToOrder(requestBody), userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToOrderPostResponseDto(order)), HttpStatus.CREATED);
    }

    @DeleteMapping("/{user-id}/{tableNumber}")
    public ResponseEntity deleteOrder(@PathVariable("user-id") @Positive Long userId,
                                      @PathVariable("tableNumber") @Positive int tableNumber) {
        orderService.deleteOrder(userId, tableNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
