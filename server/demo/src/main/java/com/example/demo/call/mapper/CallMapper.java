package com.example.demo.call.mapper;

import com.example.demo.call.dto.CallDto;
import com.example.demo.call.entity.Call;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CallMapper {
    Call callPostDtoToCall(CallDto.Post requestBody);
    CallDto.Response callToCallResponseDto(Call call);
}
