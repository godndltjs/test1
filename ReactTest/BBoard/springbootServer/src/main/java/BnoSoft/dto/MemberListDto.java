package BnoSoft.dto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import BnoSoft.domain.Member;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MemberListDto {
	
	@ApiModelProperty(value = "회원정보 조회 결과 List")
	private List<Member> list;
//	private int page;
//	private int pageSize;
	@ApiModelProperty(value = "페이지 번호")
	private int pageno;
	@ApiModelProperty(value = "페이지 사이즈(테이블 Row 갯수)")
	private int pagesize;
	@ApiModelProperty(value = "회원정보 조회 결과 Count")
	private long totalcount;
	
	@ApiModelProperty(value = "ID")
	private String id;
	@ApiModelProperty(value = "이름")
	private String name;
	@ApiModelProperty(value = "핸드폰연락처(12자리[001012345678])")
	private String phoneNum;
	@ApiModelProperty(value = "이메일")
	private String email;
	@ApiModelProperty(value = "소속")
	private String attach;
	
	@ApiModelProperty(value = "시작일")
	private String startDate;
	@ApiModelProperty(value = "종료일")
	private String endDate;
	
	/*
	 * toPage() : 페이징을 위한 매개변수를 JPA에서 페이징을 위한 객체로 변환하는 기능을 하는 함수
	 */
	public PageRequest toPage() {
		int pageno = this.pageno;
		int pagesize = this.pagesize;
		
		System.out.println("> pageno : " + pageno);
		
		if( this.pageno > 0 ) {
			pageno = this.pageno-1;
		}
		
		System.out.println("> pagesize : " + pagesize);
		
		if( this.pagesize > 0 ) {
			pagesize = this.pagesize;
		}
		
		return PageRequest.of(pageno, pagesize, Sort.by(Sort.Direction.DESC, "editDateTime", "id"));
	}
	
	/*
	 * toSpecification() : 검색을 위한 매개변수를 JPA에서 검색조건을 위한 객체로 변환하는 기능을 하는 함수
	 */
	public Specification<Member> toSpecification() {
		
		Specification<Member> id = null;
		Specification<Member> name = null;
		Specification<Member> phoneNum = null;
		Specification<Member> email = null;
		Specification<Member> attach = null;
		
		Specification<Member> editDateTime = null;
		
		System.out.println("> this.id : " + this.id);
		
		if( this.id != null && !this.id.isEmpty() ) {
			id = Specification.where((root, query, builder) ->
					builder.like(root.<String> get("id"), "%" + this.id + "%"));
		}
		
		System.out.println("> this.name : " + this.name);
		
		if( this.name != null && !this.name.isEmpty() ) {
			name = Specification.where((root, query, builder) ->
					builder.like(root.<String> get("name"), "%" + this.name + "%"));
		}
		
		System.out.println("> this.phoneNum : " + this.phoneNum);
		
		if( this.phoneNum != null && !this.phoneNum.isEmpty() ) {
			phoneNum = Specification.where((root, query, builder) ->
					builder.like(root.<String> get("phoneNum"), "%" + this.phoneNum + "%"));
		}
		
		System.out.println("> this.email : " + this.email);
		
		if( this.email != null && !this.email.isEmpty() ) {
			email = Specification.where((root, query, builder) ->
					builder.like(root.<String> get("email"), "%" + this.email + "%"));
		}
		
		System.out.println("> this.attach : " + this.attach);
		
		if( this.attach != null && !this.attach.isEmpty() ) {
			attach = Specification.where((root, query, builder) ->
					builder.like(root.<String> get("attach"), "%" + this.attach + "%"));
		}
		
		System.out.println("> this.startDate : " + this.startDate);
		System.out.println("> this.endDate : " + this.endDate);
		
		if( (this.startDate != null && !this.startDate.isEmpty()) && (this.endDate != null && !this.endDate.isEmpty()) ) {
			LocalDate strDate = LocalDate.parse(this.startDate, DateTimeFormatter.ISO_DATE);
			LocalDate endDate = LocalDate.parse(this.endDate, DateTimeFormatter.ISO_DATE);
			
			System.out.println(">> strDate:" + strDate);
			System.out.println(">> endDate:" + endDate);
			
			editDateTime = Specification.where((root, query, builder) ->
					builder.between(root.<LocalDate> get("editDateTime"), strDate, endDate));
		}
		
		return Specification.where(id).and(name).and(phoneNum).and(email).and(attach).and(editDateTime);
	}

}
