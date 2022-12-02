package com.example.demo.controller;

import com.example.demo.dto.CallDto;
import com.example.demo.entity.Call;
import com.example.demo.mapper.CallMapper;
import com.example.demo.service.CallService;
import com.example.demo.dto.SingleResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/call")
@Validated
@AllArgsConstructor
public class CallController {

    private final CallService callService;
    private final CallMapper mapper;

    @PostMapping("/{member-id}/{tableNumber}")
    public ResponseEntity postCall(@PathVariable("member-id") @Positive Long memberId,
                                   @PathVariable("tableNumber") @Positive int tableNumber) {

        CallDto.Post requestBody = new CallDto.Post();
        requestBody.setMemberId(memberId);
        requestBody.setTableNumber(tableNumber);

        Call call = callService.createCall(mapper.callPostDtoToCall(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.callToCallResponseDto(call)), HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getCall(@PathVariable("member-id") @Positive Long memberId) {
        List<Call> callList = callService.getCall(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(callList), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}/{tableNumber}")
    public ResponseEntity deleteCall(@PathVariable("member-id") @Positive Long memberId,
                                     @PathVariable("tableNumber") @Positive int tableNumber) {
        callService.deleteCall(memberId, tableNumber);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
