package com.example.demo.table.service;

import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.order.entity.Order;
import com.example.demo.order.repository.OrderRepository;
import com.example.demo.table.dto.TableDto;
import com.example.demo.table.entity.Table;
import com.example.demo.table.repository.TableRepository;
import com.example.demo.user.entity.Member;
import com.example.demo.user.repository.MemberRepository;
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

    public List<Table> createTable(List<Table> tableList) {

        Optional<Member> member = memberRepository.findById(tableList.get(0).getMember().getId());
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

        Optional<Member> findMember = memberRepository.findById(member.getId());
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

    public List<Table> getTables(Long memberId) {

        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream()
                .filter(table -> orderRepository.findByTable(table).size() > 0)
                .collect(Collectors.toList());

        return tableList;
    }

    public void deleteTable(Long memberId, int tableNumber) {

        Optional<Member> member = memberRepository.findById(memberId);
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        tableRepository.delete(tableList.get(0));
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

        Optional<Member> member = memberRepository.findById(table.getMember().getId());
        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(findTable -> findTable.getTableNumber() == table.getTableNumber())
                .collect(Collectors.toList());
        if (tableList.size() > 0)
            throw new BusinessLogicException(ExceptionCode.TABLENUMBER_EXISTS);
    }
}