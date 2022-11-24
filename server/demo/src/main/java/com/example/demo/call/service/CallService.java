package com.example.demo.call.service;

import com.example.demo.call.entity.Call;
import com.example.demo.call.repository.CallRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.table.entity.Table;
import com.example.demo.table.repository.TableRepository;
import com.example.demo.user.entity.Member;
import com.example.demo.user.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.expression.spel.ast.OpAnd;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CallService {

    private final CallRepository callRepository;
    private final MemberRepository memberRepository;
    private final TableRepository tableRepository;

    public Call createCall(Call call) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedNow = LocalDateTime.now().format(formatter);
        call.setCreatedAt(formattedNow);
        verifyCall(call);

        return callRepository.save(call);
    }

    public void verifyCall(Call call) {
        Optional<Member> member = memberRepository.findById(call.getMemberId());
        if(member.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }

        List<Table> tableList = tableRepository.findAllByMember(member.get())
                .stream().filter(table -> table.getTableNumber() == call.getTableNumber())
                .collect(Collectors.toList());
        if(tableList.size() == 0) {
            throw new BusinessLogicException(ExceptionCode.TABLE_NOT_FOUND);
        }

        List<Call> callList = callRepository.findAllByMemberId(call.getMemberId())
                .stream().filter(findCall -> findCall.getTableNumber() == call.getTableNumber())
                .collect(Collectors.toList());
        if(callList.size() > 0) {
            throw new BusinessLogicException(ExceptionCode.CALL_EXISTS);
        }
    }

    public List<Call> getCall(Long memberId) {
        List<Call> callList = callRepository.findAllByMemberId(memberId);

        return callList;
    }

    public void deleteCall(Long memberId, int tableNumber) {
        List<Call> callList = callRepository.findAllByMemberId(memberId)
                .stream().filter(call -> call.getTableNumber() == tableNumber)
                .collect(Collectors.toList());

        callRepository.delete(callList.get(0));
    }
}
