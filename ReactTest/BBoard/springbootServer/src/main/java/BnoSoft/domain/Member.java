package BnoSoft.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.UpdateTimestamp;

import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@ToString
public class Member {

	/*
	 * @NoArgsConstructor(access=AccessLevel.PROTECTED) : access level�� protected�� �� ������ ����ڰ� �⺻�����ڷ� ��ü�� �����ϴ°��� �����鼭 JPA���� ������ �����͸� ���� �� ��ü�� ������ �� �ֵ��� �ϱ� �����Դϴ�.
	 * @Getter : Lombok���� ������ �� �ν��Ͻ��� getter �޼ҵ带 �ڵ����� �������ִ� ������̼��Դϴ�. @Setter ������̼��� ������� ���� ������ ���к��� ������ ��ü�� ���� setter ����� ���� �����Դϴ�.
	 */
	
	@Id /* ��ƼƼ���� �⺻Ű, �ϳ��� ��ƼƼ���� �ݵ�� �ϳ��� �����ؾ� �Ѵ�. */
	@GeneratedValue(strategy = GenerationType.AUTO) /* �����ͺ��̽��� ���� �ڵ����� ������ ���̶�� �ǹ� */
//	@Column(name = "SEQ") /* �ʵ�� ���̺��� �÷��� ����, �� ������̼��� ������ ����, ������ �ʵ��� �̸��� ���̺��� �÷����� �ڵ����� ���� */
	@ApiModelProperty(value = "�⺻Ű")
	private long seq;
	
//	@Column(name="ID", length = 100, unique = true)
	@Column(unique = true)
	@ApiModelProperty(value = "ID")
	private String id;
	
//	@Column(name="NAME", length = 30, nullable = false)
	@Column(nullable = false)
	@ApiModelProperty(value = "�̸�")
	private String name;
	
//	@Column(name="PHONE_NUM", length = 12)
	@Column
	@ApiModelProperty(value = "�ڵ�������ó(12�ڸ�[001012345678])")
	private String phoneNum;
	
//	@Column(name="EMAIL", length = 50)
	@Column
	@ApiModelProperty(value = "�̸���")
	private String email;
	
//	@Column(name="ATTACH", length = 100)
	@Column
	@ApiModelProperty(value = "�Ҽ�")
	private String attach;
	
//	@Column(name="CREATE_DATE_TIME")
//	@CreationTimestamp
//	private LocalDateTime createDateTime;
	
	@UpdateTimestamp
	@ApiModelProperty(value = "����������")
	private LocalDate editDateTime;
	
	
	/*
	 * @Builder : �� Entity Ŭ���������� ����� ������ �� setter �޼ҵ带 �����Ͽ��� ������ �����͸� �ֱ� ���� ������� Builder ������ �̿��Ͽ� �����͸� �Է��ϵ��� �Ͽ����ϴ�.
	 * �ش� ������̼��� �ڵ����� Builder ������ ����� �� �ֵ��� �Լ��� �����ϴ� ����� �մϴ�.
	 */
	@Builder
	private Member(long seq, String id, String name, String phoneNum, String email, String attach) {
		this.seq = seq;
		this.id = id;
		this.name = name;
		this.phoneNum = phoneNum;
		this.email = email;
		this.attach = attach;		
	}
	
}
