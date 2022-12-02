package com.example.demo.controller;

import com.example.demo.dto.SingleResponseDto;
import com.example.demo.dto.OrderDto;
import com.example.demo.entity.Order;
import com.example.demo.mapper.OrderMapper;
import com.example.demo.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/order")
@Validated
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderMapper mapper;


    @PostMapping("/{member-id}")
    public ResponseEntity postOrder(@PathVariable("member-id") @Positive Long memberId,
                                    @Valid @RequestBody OrderDto.Post requestBody) {
        Order order = orderService.createOrder(mapper.orderPostDtoToOrder(requestBody), memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.orderToOrderPostResponseDto(order)), HttpStatus.CREATED);
    }

    @DeleteMapping("/{member-id}/{tableNumber}")
    public ResponseEntity deleteOrder(@PathVariable("member-id") @Positive Long memberId,
                                      @PathVariable("tableNumber") @Positive int tableNumber) {
        orderService.deleteOrder(memberId, tableNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{member-id}/{tableNumber}")
    public ResponseEntity getOrderList(@PathVariable("member-id") @Positive Long memberId,
                                       @PathVariable("tableNumber") @Positive int tableNumber) {

        List<OrderDto.getOrderMenuResponse> orderMenuResponseList =
                orderService.getOrderMenuResponseList(memberId, tableNumber);

        return new ResponseEntity<>(
                new SingleResponseDto<>(orderMenuResponseList), HttpStatus.OK);
    }

    @PatchMapping("/{order-id}")
    public ResponseEntity patchOrder(@PathVariable("order-id") @Positive Long orderId) {
        orderService.updateOrder(orderId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
