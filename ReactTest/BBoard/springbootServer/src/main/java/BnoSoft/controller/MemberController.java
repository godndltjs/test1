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
	 * ȸ�� ����
	 * : PSOT
	 */
	@ApiOperation(value = "ȸ������")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "�̸�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "�ڵ�������ó(12�ڸ�[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "�̸���", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "�Ҽ�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
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
	 * �⺻Ű ������ ȸ�� ��ȸ
	 * : POST
	 */
	@ApiOperation(value = "ȸ�������� �⺻Ű ������ ȸ������ ��ȸ")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "seq", value = "�⺻Ű", required = true, dataType = "string", paramType = "query", defaultValue = ""),
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
	 * �⺻Ű ������ ȸ�� ��ȸ
	 * : GET
	 */
	@ApiOperation(value = "ȸ�������� �⺻Ű ������ ȸ������ ��ȸ", hidden = true)
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
	 * ȸ�� ���� �������� ȸ�� ��ȸ (����¡ ó�� ����)
	 * : POST
	 */
	@ApiOperation(value = "ȸ�������������� ȸ������ ��ȸ")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "�̸�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "�ڵ�������ó(12�ڸ�[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "�̸���", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "�Ҽ�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "startDate", value = "������", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "endDate", value = "������", required = true, dataType = "string", paramType = "query", defaultValue = ""),
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
	 * �⺻Ű�� ȸ�������� ����
	 * : PUT
	 */
	@ApiOperation(value = "ȸ�������� �⺻Ű�� ȸ�������� ȸ������ ����")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "id", value = "ID", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "name", value = "�̸�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "phoneNum", value = "�ڵ�������ó(12�ڸ�[001012345678])", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "email", value = "�̸���", required = true, dataType = "string", paramType = "query", defaultValue = ""),
//		@ApiImplicitParam(name = "attach", value = "�Ҽ�", required = true, dataType = "string", paramType = "query", defaultValue = ""),
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
	 * �⺻Ű�� ȸ������ ����
	 * : Delete
	 */
	@ApiOperation(value = "ȸ�������� �⺻Ű ������ ȸ������ ����")
//	@ApiImplicitParams({
//		@ApiImplicitParam(name = "seq", value = "�⺻Ű", required = true, dataType = "string", paramType = "query", defaultValue = ""),
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
