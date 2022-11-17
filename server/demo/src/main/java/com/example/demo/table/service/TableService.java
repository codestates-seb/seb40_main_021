package com.example.demo.table.service;

import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.order.entity.Order;
import com.example.demo.order.repository.OrderRepository;
import com.example.demo.table.dto.TableDto;
import com.example.demo.table.entity.Table;
import com.example.demo.table.repository.TableRepository;
import com.example.demo.user.entity.User;
import com.example.demo.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TableService {
    private final TableRepository tableRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    public List<Table> createTable(List<Table> tableList) {

        Optional<User> user = userRepository.findById(tableList.get(0).getUser().getUserId());
        List<Table> findTableList = new ArrayList<>();

        for(int i = 0; i < tableList.size(); i++) {
            verifyTableNumber(tableList.get(i));
            List<Order> orderList = new ArrayList<>();
            tableList.get(i).setOrderList(orderList);
            Table findTable = tableRepository.save(tableList.get(i));
            findTableList.add(findTable);
        }

        return findTableList;
    }

    public void updateTable(User user, TableDto.Patch requestBody) {

        Optional<User> findUser = userRepository.findById(user.getUserId());
        List<Table> tableList = tableRepository.findAllByUser(findUser.get())
                .stream().filter(table -> table.getTableNumber() == requestBody.getBeforeTableNumber())
                .collect(Collectors.toList());
        List<Order> orderList = orderRepository.findAllByTable(tableList.get(0));
        List<Table> changeTableList = tableRepository.findAllByUser(findUser.get())
                .stream().filter(table -> table.getTableNumber() == requestBody.getAfterTableNumber())
                .collect(Collectors.toList());
        for(int i = 0; i < orderList.size(); i++) {
            orderList.get(i).setTable(changeTableList.get(0));
            orderRepository.save(orderList.get(i));
        }
    }

    public List<Table> getTables(Long userId) {

        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream()
                .filter(table -> orderRepository.findByTable(table).size() > 0)
                .collect(Collectors.toList());

        return tableList;
    }

    public void deleteTable(Long userId, int tableNumber) {

        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        tableRepository.delete(tableList.get(0));
    }

    public List<Table> getAllQr(Long userId) {

        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get());
        return tableList;
    }

    public Table getOneQr(Long userId, int tableNumber) {

        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        return tableList.get(0);
    }

    public void verifyTableNumber(Table table) {

        Optional<User> user = userRepository.findById(table.getUser().getUserId());
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream().filter(findTable -> findTable.getTableNumber() == table.getTableNumber())
                .collect(Collectors.toList());
        if (tableList.size() > 0)
            throw new BusinessLogicException(ExceptionCode.TABLENUMBER_EXISTS);
    }
}