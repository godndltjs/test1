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
	 * @NoArgsConstructor(access=AccessLevel.PROTECTED) : access level을 protected로 한 이유는 사용자가 기본생성자로 객체를 생성하는것을 막으면서 JPA에서 도메인 데이터를 담을 때 객체를 생성할 수 있도록 하기 위함입니다.
	 * @Getter : Lombok에서 도메인 내 인스턴스의 getter 메소드를 자동으로 생성해주는 어노테이션입니다. @Setter 어노테이션을 사용하지 않은 이유는 무분별한 도메인 객체에 대한 setter 사용을 막기 위함입니다.
	 */
	
	@Id /* 엔티티빈의 기본키, 하나의 엔티티에는 반드시 하나가 존재해야 한다. */
	@GeneratedValue(strategy = GenerationType.AUTO) /* 데이터베이스에 의해 자동으로 생성된 값이라는 의미 */
//	@Column(name = "SEQ") /* 필드와 테이블의 컬럼을 매핑, 이 어노테이션은 생략이 가능, 생략시 필드의 이름이 테이블의 컬럼으로 자동으로 매핑 */
	@ApiModelProperty(value = "기본키")
	private long seq;
	
//	@Column(name="ID", length = 100, unique = true)
	@Column(unique = true)
	@ApiModelProperty(value = "ID")
	private String id;
	
//	@Column(name="NAME", length = 30, nullable = false)
	@Column(nullable = false)
	@ApiModelProperty(value = "이름")
	private String name;
	
//	@Column(name="PHONE_NUM", length = 12)
	@Column
	@ApiModelProperty(value = "핸드폰연락처(12자리[001012345678])")
	private String phoneNum;
	
//	@Column(name="EMAIL", length = 50)
	@Column
	@ApiModelProperty(value = "이메일")
	private String email;
	
//	@Column(name="ATTACH", length = 100)
	@Column
	@ApiModelProperty(value = "소속")
	private String attach;
	
//	@Column(name="CREATE_DATE_TIME")
//	@CreationTimestamp
//	private LocalDateTime createDateTime;
	
	@UpdateTimestamp
	@ApiModelProperty(value = "최종수정일")
	private LocalDate editDateTime;
	
	
	/*
	 * @Builder : 위 Entity 클래스에서는 비공개 생성자 및 setter 메소드를 제거하였기 때문에 데이터를 넣기 위한 방법으로 Builder 패턴을 이용하여 데이터를 입력하도록 하였습니다.
	 * 해당 어노테이션은 자동으로 Builder 패턴을 사용할 수 있도록 함수를 생성하는 기능을 합니다.
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
