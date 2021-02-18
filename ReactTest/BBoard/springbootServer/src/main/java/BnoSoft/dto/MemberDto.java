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
	 * DTO ����
	 * Entity Ŭ������ ������ ���¸� ������ ������ Webapplication���� �����͸� �����ϴ� ��ü�� ���Ǵ� Ŭ�����Դϴ�.
	 * View layer���� �����ϴ� �����ʹ� ����� ���ɼ��� ������, DB�� ����� EntityŬ���������δ� ǥ���� �� �� �� ���� �׸���� �����ϱ� ������ DTO ����� ����
	 */
	
	@ApiModelProperty(value = "�⺻Ű")
	private long seq;
	@ApiModelProperty(value = "ID")
	private String id;
	@ApiModelProperty(value = "�̸�")
	private String name;
	@ApiModelProperty(value = "�ڵ�������ó(12�ڸ�[001012345678])")
	private String phoneNum;
	@ApiModelProperty(value = "�̸���")
	private String email;
	@ApiModelProperty(value = "�Ҽ�")
	private String attach;
	@ApiModelProperty(value = "����������(�Է� ���ʿ�)")
	private LocalDate editDateTime;
	
	/*
	 * toEntity() : DTO�� �����͸� Entity Ŭ������ ��ȯ
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
	 * MemberDto(Member member) : entity Ŭ������ �Ű������� �޴� ������ �Դϴ�. �ش� �����ڷ� ���� @NoArgsConstructor ������̼��� �߰�
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
