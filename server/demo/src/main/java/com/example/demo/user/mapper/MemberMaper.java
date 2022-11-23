package com.example.demo.user.mapper;

import com.example.demo.category.dto.CategoryPostDto;
import com.example.demo.category.entity.Category;
import com.example.demo.user.dto.MemberPatchDto;
import com.example.demo.user.dto.MemberResponseDto;
import com.example.demo.user.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMaper {

    default MemberResponseDto memberToMemberResponseDto(Member member)
    {


        MemberResponseDto memberResponsdeDto = new MemberResponseDto();

        memberResponsdeDto.setMemberId(member.getId());
        memberResponsdeDto.setBusinessNumber(member.getBusinessNumber());
        memberResponsdeDto.setAbout(member.getAbout());
        memberResponsdeDto.setAddress(member.getAddress());
        memberResponsdeDto.setContactNumber(member.getContactNumber());
        memberResponsdeDto.setBusinessName(member.getBusinessName());
        memberResponsdeDto.setBusinessHours(member.getBusinessHours());
        memberResponsdeDto.setPassword(member.getPassword());


        return memberResponsdeDto;
    }
    default Member memberPatchDtoToMember(MemberPatchDto memberPatchDto)

    {

        if ( memberPatchDto == null ) {
            return null;
        }



        Member member = new Member();
        member.setId(memberPatchDto.getId());
        member.setAbout(memberPatchDto.getAbout());
        member.setContactNumber(memberPatchDto.getContactNumber());
        member.setAddress(memberPatchDto.getAddress());
        member.setBusinessName(memberPatchDto.getBusinessName());
        member.setBusinessHours(memberPatchDto.getBusinessHours());
        member.setPassword(memberPatchDto.getPassword());

        return member;
    }//{


//      Member member= new Member();
//     //   member.setId(memberPatchDto.getMemberId());
//        member.setBusinessNumber(memberPatchDto.getBusinessNumber());
//        member.setAbout(memberPatchDto.getAbout());
//        member.setAddress(memberPatchDto.getAddress());
//        member.setContactNumber(memberPatchDto.getContactNumber());
//
//        return member;

   // }


}
