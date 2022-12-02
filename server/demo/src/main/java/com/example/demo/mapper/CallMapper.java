package com.example.demo.mapper;

import com.example.demo.dto.CallDto;
import com.example.demo.entity.Call;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CallMapper {
    Call callPostDtoToCall(CallDto.Post requestBody);
    CallDto.Response callToCallResponseDto(Call call);
}
