package com.example.demo.service;

import com.example.demo.entity.Call;
import com.example.demo.entity.Member;
import com.example.demo.repository.CallRepository;
import com.example.demo.exception.BusinessLogicException;
import com.example.demo.exception.ExceptionCode;
import com.example.demo.entity.Table;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.TableRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
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
        verifyCall(call);

        Call findCall = callRepository.save(call);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss").withZone(ZoneId.of("Asia/Tokyo"));
        String formattedNow = ZonedDateTime.now(ZoneId.of("Asia/Tokyo")).format(formatter);
        findCall.setCreatedAt(formattedNow);

        return callRepository.save(findCall);
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
