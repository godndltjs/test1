package BnoSoft.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import BnoSoft.domain.Member;
import BnoSoft.domain.MemberRepository;
import BnoSoft.dto.MemberDto;
import BnoSoft.dto.MemberListDto;
import javassist.NotFoundException;

@Service
public class MemberService {
	
	@Autowired
	private MemberRepository memberRepository;
	
	public MemberDto insertMember(MemberDto memberDto) throws Exception {
		System.out.println(">>>>> MemberService_insertMember <<<<<");
		System.out.println(memberDto.toString());
		System.out.println("======================================");
		
		Member member = memberRepository.save(memberDto.toEntity());
		
		return new MemberDto(member);
	}
	
	public MemberDto viewSeq(Long seq) throws Exception {
		System.out.println(">>>>> MemberService_viewSeq <<<<<");
		System.out.println(seq);
		System.out.println("======================================");
		
		Optional<Member> opt = memberRepository.findById(seq);
		
		if( opt.isPresent() ) {
			return new MemberDto(opt.get());
		} else {
			throw new NotFoundException("리소스를 찾을 수 없습니다.");
		}
	}
	
	public MemberListDto listMember(MemberListDto memberListDto) throws Exception {
		System.out.println(">>>>> MemberService_listMember <<<<<");
		System.out.println(memberListDto.toString());
		System.out.println("======================================");
		
		Page<Member> page = memberRepository.findAll(memberListDto.toSpecification(), memberListDto.toPage());
		
		memberListDto.setList(page.getContent());
		memberListDto.setTotalcount(page.getTotalElements());
		
		return memberListDto;
	}
	
	public MemberDto updateMember(MemberDto memberDto, long seq) throws Exception {
		System.out.println(">>>>> MemberService_updateMember <<<<<");
		System.out.println(memberDto.toString());
		System.out.println("======================================");
		
		MemberDto viewSeq = this.viewSeq(seq);
		
		Member member = null;
		
		if( viewSeq != null ) {
			if( memberDto != null ) {
				viewSeq.setName(memberDto.getName());
				viewSeq.setPhoneNum(memberDto.getPhoneNum());
				viewSeq.setEmail(memberDto.getEmail());
				viewSeq.setAttach(memberDto.getAttach());
				
				member = memberRepository.save(viewSeq.toEntity());
			}
		} else {
			throw new NotFoundException("리소스를 찾을 수 없습니다.");
		}
		
		return new MemberDto(member);
	}
	
	public void delete(long seq) throws Exception {
		System.out.println(">>>>> MemberService_delete <<<<<");
		System.out.println(seq);
		System.out.println("======================================");
		
		this.viewSeq(seq);
		
		memberRepository.deleteById(seq);
	}

}
