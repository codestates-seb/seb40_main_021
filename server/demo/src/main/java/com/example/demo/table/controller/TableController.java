package com.example.demo.table.controller;

import com.example.demo.dto.SingleResponseDto;
import com.example.demo.table.dto.TableDto;
import com.example.demo.table.entity.Table;
import com.example.demo.table.mapper.TableMapper;
import com.example.demo.table.service.TableService;
import com.example.demo.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/table")
@Validated
@AllArgsConstructor
public class TableController {
    private final TableService tableService;
    private final TableMapper mapper;

    @PostMapping("/{user-id}")
    public ResponseEntity postTable(@PathVariable("user-id") @Positive Long userId,
                                    @Valid @RequestBody TableDto.postList requestBody) {
        requestBody.setUserId(userId);
        List<Table> tableList = tableService.createTable(mapper.tablePostDtoToTableList(requestBody));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchTable(@PathVariable("user-id") @Positive Long userId,
                                     @Valid @RequestBody TableDto.Patch requestBody) {
        User user = new User();
        user.setUserId(userId);
        tableService.updateTable(user, requestBody);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getTable(@PathVariable("user-id") @Positive Long userId) {
        List<Table> tableList = tableService.getTables(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tablesToTableGetResponseDto(tableList)), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}/{tableNumber}")
    public ResponseEntity deleteTable(@PathVariable("user-id") @Positive Long userId,
                                      @PathVariable("tableNumber") @Positive int tableNumber) {
        tableService.deleteTable(userId, tableNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{user-id}/qr")
    public ResponseEntity getAllQr(@PathVariable("user-id") @Positive Long userId) {
        List<Table> tableList = tableService.getAllQr(userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tablesToGetQrResponseDto(tableList)), HttpStatus.OK);
    }

    @GetMapping("/{user-id}/qr/{tableNumber}")
    public ResponseEntity getOneQr(@PathVariable("user-id") @Positive Long userId,
                                   @PathVariable("tableNumber") @Positive int tableNumber) {
        Table table = tableService.getOneQr(userId, tableNumber);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tableToGetQrResponseDto(table)), HttpStatus.OK);
    }
}