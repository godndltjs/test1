package BnoSoft.dto;

import java.time.LocalDate;

import BnoSoft.domain.Member;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MemberDto {

	/*
	 * DTO 생성
	 * Entity 클래스와 유사한 형태를 가지고 있지만 Webapplication에서 데이터를 전달하는 객체로 사용되는 클래스입니다.
	 * View layer에서 전달하는 데이터는 변경될 가능성이 높으며, DB와 연결된 Entity클래스만으로는 표현을 다 할 수 없는 항목들이 존재하기 때문에 DTO 사용을 권장
	 */
	
	@ApiModelProperty(value = "기본키")
	private long seq;
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
	@ApiModelProperty(value = "최종수정일(입력 불필요)")
	private LocalDate editDateTime;
	
	/*
	 * toEntity() : DTO의 데이터를 Entity 클래스로 반환
	 */
	public Member toEntity() {
		return Member.builder()
				.seq(seq)
				.id(id)
				.name(name)
				.phoneNum(phoneNum)
				.email(email)
				.attach(attach)
				.build();
	}	
	
	/*
	 * MemberDto(Member member) : entity 클래스를 매개변수로 받는 생성자 입니다. 해당 생성자로 인해 @NoArgsConstructor 어노테이션을 추가
	 */
	public MemberDto(Member member) {
		this.seq = member.getSeq();
		this.id = member.getId();
		this.name = member.getName();
		this.phoneNum = member.getPhoneNum();
		this.email = member.getEmail();
		this.attach = member.getAttach();
	}	
	
}
