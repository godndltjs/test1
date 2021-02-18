package BnoSoft.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BnoSoft.dto.MemberDto;
import BnoSoft.dto.MemberListDto;
import BnoSoft.service.MemberService;
import io.swagger.annotations.ApiOperation;
import javassist.NotFoundException;

@CrossOrigin(origins = {"http://localhost:8080"}) 
@RestController
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	/*
	 * 회원 저장
	 * : PSOT
	 */
	@ApiOperation(value = "회원저장")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "이름", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "핸드폰연락처(12자리[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "이메일", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "소속", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//				})
	@PostMapping(value = "/insertMember", produces = "application/json; charset=utf-8")
	public ResponseEntity<?> insertMember(@RequestBody final MemberDto memberDto) {
		ResponseEntity<?> entity = null;
		
		try {
			entity = new ResponseEntity<MemberDto>(memberService.insertMember(memberDto), HttpStatus.CREATED);
		} catch(Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}
	
	/*
	 * 기본키 정보로 회원 조회
	 * : POST
	 */
	@ApiOperation(value = "회원정보의 기본키 정보로 회원정보 조회")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "seq", value = "기본키", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//				})
	@PostMapping(value = "/viewSeq", produces = "application/json; charset=utf-8")
	public ResponseEntity<?> viewSeq(@RequestBody final MemberDto memberDto) {
		ResponseEntity<?> entity = null;
		
		try {
			entity = new ResponseEntity<MemberDto>(memberService.viewSeq(memberDto.getSeq()), HttpStatus.OK);
		} catch (NotFoundException e) {
			entity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}
	
	/*
	 * 기본키 정보로 회원 조회
	 * : GET
	 */
	@ApiOperation(value = "회원정보의 기본키 정보로 회원정보 조회", hidden = true)
	@GetMapping("/viewSeqGet/{seq}")
	public ResponseEntity<?> viewSeqGet(@PathVariable("seq") final long seq) {
		ResponseEntity<?> entity = null;
		
		try {
			entity = new ResponseEntity<MemberDto>(memberService.viewSeq(seq), HttpStatus.OK);
		} catch (NotFoundException e) {
			entity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}
	
	/*
	 * 회원 정보 조건으로 회원 조회 (페이징 처리 포함)
	 * : POST
	 */
	@ApiOperation(value = "회원정보조건으로 회원정보 조회")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "이름", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "핸드폰연락처(12자리[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "이메일", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "소속", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "startDate", value = "시작일", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "endDate", value = "종료일", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//				})
	@PostMapping(value = "/listMember", produces = "application/json; charset=utf-8")
	public ResponseEntity<?> listMember(@RequestBody final MemberListDto memberListDto) {
		ResponseEntity<?> entity = null;
		
		try {
			entity = new ResponseEntity<MemberListDto>(memberService.listMember(memberListDto), HttpStatus.OK);
		} catch(Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}

	/*
	 * 기본키와 회원정보로 수정
	 * : PUT
	 */
	@ApiOperation(value = "회원정보의 기본키와 회원정보로 회원정보 수정")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "이름", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "핸드폰연락처(12자리[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "이메일", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "소속", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//				})
	@PutMapping("updateMember/{seq}")
	public ResponseEntity<?> updateMember(@PathVariable("seq") final long seq, @RequestBody final MemberDto memberDto) {
		ResponseEntity<?> entity = null;
		
		try {
			entity = new ResponseEntity<MemberDto>(memberService.updateMember(memberDto, seq), HttpStatus.OK);
		} catch(Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}
	
	/*
	 * 기본키로 회원정보 삭제
	 * : Delete
	 */
	@ApiOperation(value = "회원정보의 기본키 정보로 회원정보 삭제")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "seq", value = "기본키", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//				})
	@DeleteMapping("deleteMember/{seq}")
	public ResponseEntity<?> deleteMember(@PathVariable("seq") final long seq) {
		ResponseEntity<?> entity = null;
		
		try {
			memberService.delete(seq);
			entity = new ResponseEntity<>(HttpStatus.OK);
		} catch (NotFoundException e) {
			entity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			entity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}

}
