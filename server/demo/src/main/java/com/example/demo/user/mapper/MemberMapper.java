package com.example.demo.user.mapper;


import com.example.demo.user.dto.MemberDto;
import com.example.demo.user.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
   MemberDto.Response memberToMemberResponse(Member member);

    List<MemberDto.Response> membersToMemberResponses(List<Member> members);
}
