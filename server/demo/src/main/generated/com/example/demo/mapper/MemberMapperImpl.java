package com.example.demo.mapper;

import com.example.demo.dto.MemberDto;
import com.example.demo.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-28T18:23:59+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setLoginId( requestBody.getLoginId() );
        member.setPassword( requestBody.getPassword() );
        member.setBusinessNumber( requestBody.getBusinessNumber() );
        member.setAbout( requestBody.getAbout() );
        member.setAddress( requestBody.getAddress() );
        member.setContactNumber( requestBody.getContactNumber() );
        member.setBusinessName( requestBody.getBusinessName() );
        member.setBusinessHours( requestBody.getBusinessHours() );

        return member;
    }

    @Override
    public Member memberPatchToMember(MemberDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( requestBody.getMemberId() );
        member.setLoginId( requestBody.getLoginId() );
        member.setPassword( requestBody.getPassword() );
        member.setBusinessNumber( requestBody.getBusinessNumber() );
        member.setAbout( requestBody.getAbout() );
        member.setAddress( requestBody.getAddress() );
        member.setContactNumber( requestBody.getContactNumber() );
        member.setBusinessName( requestBody.getBusinessName() );
        member.setBusinessHours( requestBody.getBusinessHours() );

        return member;
    }

    @Override
    public MemberDto.Response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.Response response = new MemberDto.Response();

        if ( member.getMemberId() != null ) {
            response.setMemberId( member.getMemberId() );
        }
        response.setLoginId( member.getLoginId() );
        response.setPassword( member.getPassword() );
        response.setBusinessNumber( member.getBusinessNumber() );
        response.setAbout( member.getAbout() );
        response.setAddress( member.getAddress() );
        response.setContactNumber( member.getContactNumber() );
        response.setBusinessName( member.getBusinessName() );
        response.setBusinessHours( member.getBusinessHours() );

        return response;
    }

    @Override
    public List<MemberDto.Response> membersToMemberResponses(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.Response> list = new ArrayList<MemberDto.Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponse( member ) );
        }

        return list;
    }
}
