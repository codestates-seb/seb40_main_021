package com.example.demo.service;

import com.example.demo.entity.Member;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.dto.OrderMenuDto;
import com.example.demo.entity.Order;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.dto.TableDto;
import com.example.demo.entity.Table;
import com.example.demo.repository.TableRepository;
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
    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;
    private final OrderService orderService;

    public List<Table> createTable(List<Table> tableList) {

        Optional<Member> member = memberRepository.findById(tableList.get(0).getMember().getMemberId());
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

    public void updateTable(Member member, TableDto.Patch requestBody) {

        Optional<Member> findMember = memberRepository.findById(member.getMemberId());
        List<Table> tableList = tableRepository.findAllByMember(findMember.get())
                .stream().filter(table -> table.getTableNumber() == requestBody.getBeforeTableNumber())
                .collect(Collectors.toList());
        List<Order> orderList = orderRepository.findAllByTable(tableList.get(0));
        List<Table> changeTableList = tableRepository.findAllByMember(findMember.get())
                .stream().filter(table -> table.getTableNumber() == requestBody.getAfterTableNumber())
                .collect(Collectors.toList());
        for(int i = 0; i < orderList.size(); i++) {
            orderList.get(i).setTable(changeTableList.get(0));
            orderRepository.save(orderList.get(i));
        }
    }

    public void updateTableNumber(TableDto.patchList requestBody) {

        Optional<Member> member = memberRepository.findById(requestBody.getMemberId());

        for(int i = 0; i < requestBody.getTableList().size(); i++) {
            Table beforeTable = new Table();
            Table afterTable = new Table();
            afterTable.setMember(member.get());
            beforeTable.setTableNumber(requestBody.getTableList().get(i).getBeforeTableNumber());
            afterTable.setTableNumber(requestBody.getTableList().get(i).getAfterTableNumber());
            afterTable.setQrUrl(requestBody.getTableList().get(i).getQrUrl());
            verifyTableNumber(afterTable);
            List<Table> tableList = tableRepository.findAllByMember(member.get())
                    .stream().filter(findTable -> findTable.getTableNumber() == beforeTable.getTableNumber())
                    .collect(Collectors.toList());
            tableList.get(0).setTableNumber(afterTable.getTableNumber());
            tableList.get(0).setQrUrl(afterTable.getQrUrl());
            tableRepository.save(tableList.get(0));
        }
    }

    public List<TableDto.getTableResponse> getTables(Long memberId) {

        List<TableDto.getTableResponse> getTableResponseList = new ArrayList<>();
        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream()
                .filter(table -> orderRepository.findByTable(table).size() > 0)
                .collect(Collectors.toList());

        for(int i = 0; i < tableList.size(); i++) {
            TableDto.getTableResponse response = new TableDto.getTableResponse();
            response.setTableNumber(tableList.get(i).getTableNumber());
            response.setOrderList(orderService.getOrderMenuResponseList(memberId, tableList.get(i).getTableNumber()));
            getTableResponseList.add(response);
        }

        return getTableResponseList;
    }

    public List<TableDto.getTableOrderList> getTableOrders(Long memberId) {

        List<TableDto.getTableOrderList> getTableOrderList = new ArrayList<>();
        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream()
                .filter(table -> orderRepository.findByTable(table).size() > 0)
                .collect(Collectors.toList());

        for(int i = 0; i < tableList.size(); i++) {
            List<Order> list = tableList.get(i).getOrderList().stream().filter(order -> order.isCheckBox())
                    .collect(Collectors.toList());
            tableList.get(i).setOrderList(list);
        }

        for(int i = 0; i < tableList.size(); i++) {
            for(int j = 0; j < tableList.get(i).getOrderList().size(); j++) {
                TableDto.getTableOrderList response = new TableDto.getTableOrderList();
                response.setOrderId(tableList.get(i).getOrderList().get(j).getOrderId());
                response.setTableNumber(tableList.get(i).getOrderList().get(j).getTable().getTableNumber());
                response.setMessage(tableList.get(i).getOrderList().get(j).getMessage());
                response.setCreatedAt(tableList.get(i).getOrderList().get(j).getCreatedAt());
                List<OrderMenuDto.postResponse> orderMenuList = new ArrayList<>();
                for(int k = 0; k < tableList.get(i).getOrderList().get(j).getOrderMenuList().size(); k++) {
                    OrderMenuDto.postResponse menuResponse = new OrderMenuDto.postResponse();
                    menuResponse.setMenuId(tableList.get(i).getOrderList().get(j).getOrderMenuList().get(k).getMenu().getMenuId());
                    menuResponse.setMenuName(tableList.get(i).getOrderList().get(j).getOrderMenuList().get(k).getMenu().getMenuName());
                    menuResponse.setPrice(tableList.get(i).getOrderList().get(j).getOrderMenuList().get(k).getMenu().getPrice());
                    menuResponse.setQuantity(tableList.get(i).getOrderList().get(j).getOrderMenuList().get(k).getQuantity());
                    orderMenuList.add(menuResponse);
                }
                response.setOrderMenuList(orderMenuList);
                getTableOrderList.add(response);
            }
        }

        return getTableOrderList;
    }

    public void deleteTable(Long memberId, TableDto.deleteList requestBody) {

        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get());
        for(int i = 0; i < tableList.size(); i++) {
            for(int j = 0; j < requestBody.getTableList().size(); j++) {
                if(tableList.get(i).getTableNumber() == requestBody.getTableList().get(j).getTableNumber()) {
                    tableRepository.delete(tableList.get(i));
                }
            }
        }
    }

    public List<Table> getAllQr(Long memberId) {

        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get());
        return tableList;
    }

    public Table getOneQr(Long memberId, int tableNumber) {

        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        return tableList.get(0);
    }

    public void verifyTableNumber(Table table) {

        Optional<Member> member = memberRepository.findById(table.getMember().getMemberId());
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(findTable -> findTable.getTableNumber() == table.getTableNumber())
                .collect(Collectors.toList());
        if (tableList.size() > 0)
            throw new BusinessLogicException(ExceptionCode.TABLENUMBER_EXISTS);
    }
}