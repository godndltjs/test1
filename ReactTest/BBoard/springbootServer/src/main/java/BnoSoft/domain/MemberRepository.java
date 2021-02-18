package BnoSoft.domain;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long>, JpaSpecificationExecutor<Member> {

	/*
	 * �˻� �� ����¡�� ���� JpaSpecificationExecutor
	 */
}
