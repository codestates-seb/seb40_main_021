package com.example.demo.table.controller;

import com.example.demo.dto.SingleResponseDto;
import com.example.demo.table.dto.TableDto;
import com.example.demo.table.entity.Table;
import com.example.demo.table.mapper.TableMapper;
import com.example.demo.table.service.TableService;
import com.example.demo.user.entity.Member;
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
@RequestMapping("/table")
@Validated
@AllArgsConstructor
public class TableController {
    private final TableService tableService;
    private final TableMapper mapper;

    @PostMapping("/{member-id}")
    public ResponseEntity postTable(@PathVariable("member-id") @Positive Long memberId,
                                    @Valid @RequestBody TableDto.postList requestBody) {
        requestBody.setMemberId(memberId);
        List<Table> tableList = tableService.createTable(mapper.tablePostDtoToTableList(requestBody));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/update/{member-id}")
    public ResponseEntity patchTableNumber(@PathVariable("member-id") @Positive Long memberId,
                                           @Valid @RequestBody TableDto.patchList requestBody) {
        requestBody.setMemberId(memberId);
        tableService.updateTableNumber(requestBody);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchTable(@PathVariable("member-id") @Positive Long memberId,
                                     @Valid @RequestBody TableDto.Patch requestBody) {
        Member member = new Member();
        member.setId(memberId);
        tableService.updateTable(member, requestBody);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getTable(@PathVariable("member-id") @Positive Long memberId) {
        List<Table> tableList = tableService.getTables(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tablesToTableGetResponseDto(tableList)), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}/{tableNumber}")
    public ResponseEntity deleteTable(@PathVariable("member-id") @Positive Long memberId,
                                      @PathVariable("tableNumber") @Positive int tableNumber) {
        tableService.deleteTable(memberId, tableNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{member-id}/qr")
    public ResponseEntity getAllQr(@PathVariable("member-id") @Positive Long memberId) {
        List<Table> tableList = tableService.getAllQr(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tablesToGetQrResponseDto(tableList)), HttpStatus.OK);
    }

    @GetMapping("/{member-id}/qr/{tableNumber}")
    public ResponseEntity getOneQr(@PathVariable("member-id") @Positive Long memberId,
                                   @PathVariable("tableNumber") @Positive int tableNumber) {
        Table table = tableService.getOneQr(memberId, tableNumber);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tableToGetQrResponseDto(table)), HttpStatus.OK);
    }
}
