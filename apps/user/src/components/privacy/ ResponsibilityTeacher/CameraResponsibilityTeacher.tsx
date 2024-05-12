import { Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

const CameraResponsibilityTeacher = () => {
  return (
    <StyledCameraResponsibilityTeacher>
      <Table>
        <Row alignItems="center">
          <Th borderTopLeftRadius={12} width="calc(100% / 9)" height={56}>
            구분
          </Th>
          <Th width="calc(100% / 6)" height={56}>
            역할
          </Th>
          <Th width="calc(100% / 9)" height={56}>
            이름
          </Th>
          <Th width="calc(100% / 12)" height={56}>
            직위
          </Th>
          <Th width="calc(100% / 4.79)" height={56}>
            소속
          </Th>
          <Th borderTopRightRadius={12} width="calc(100% / 8)" height={56}>
            연락처
          </Th>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 9)" height={56}>
            관리책임자
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            개인영상정보보호책임자
          </Td>
          <Td width="calc(100% / 9)" height={56}>
            윤혜정
          </Td>
          <Td width="calc(100% / 12)" height={56}>
            교장
          </Td>
          <Td width="calc(100% / 4.79)" height={56}>
            부산소프트웨어마이스터고등학교
          </Td>
          <Td width="calc(100% / 8)" height={56}>
            051-970-1701
          </Td>
        </Row>
        <Row alignItems="center">
          <Td borderBottomLeftRadius={12} width="calc(100% / 9)" height={56}>
            접근권한자
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            개인영상정보보호담당자
          </Td>
          <Td width="calc(100% / 9)" height={56}>
            김규봉
          </Td>
          <Td width="calc(100% / 12)" height={56}>
            교사
          </Td>
          <Td width="calc(100% / 4.79)" height={56}>
            부산소프트웨어마이스터고등학교
          </Td>
          <Td borderBottomRightRadius={12} width="calc(100% / 8)" height={56}>
            051-970-1701
          </Td>
        </Row>
      </Table>
    </StyledCameraResponsibilityTeacher>
  );
};

export default CameraResponsibilityTeacher;

const StyledCameraResponsibilityTeacher = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;
