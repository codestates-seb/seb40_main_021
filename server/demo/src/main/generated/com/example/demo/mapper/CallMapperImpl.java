package com.example.demo.mapper;

import com.example.demo.dto.CallDto;
import com.example.demo.entity.Call;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-28T18:23:58+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class CallMapperImpl implements CallMapper {

    @Override
    public Call callPostDtoToCall(CallDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Call call = new Call();

        call.setMemberId( requestBody.getMemberId() );
        call.setTableNumber( requestBody.getTableNumber() );

        return call;
    }

    @Override
    public CallDto.Response callToCallResponseDto(Call call) {
        if ( call == null ) {
            return null;
        }

        CallDto.Response response = new CallDto.Response();

        response.setCallId( call.getCallId() );
        response.setMemberId( call.getMemberId() );
        response.setTableNumber( call.getTableNumber() );

        return response;
    }
}
