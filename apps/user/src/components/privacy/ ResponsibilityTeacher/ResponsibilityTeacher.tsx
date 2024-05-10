import { Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

const ResponsibilityTeacher = () => {
  return (
    <StyledResponsibilityTeacher>
      <Table>
        <Row alignItems="center">
          <Th borderTopLeftRadius={12} width="calc(100% / 6)" height={56}>
            구분
          </Th>
          <Th width="calc(100% / 6)" height={56}>
            직위
          </Th>
          <Th width="calc(100% / 6)" height={56}>
            성명
          </Th>
          <Th borderTopRightRadius={12} width="calc(100% / 6)" height={56}>
            정원 외 전형
          </Th>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 6)" height={56}>
            개인정보 보호책임자
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            교장
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            윤혜정
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            051-970-1701
          </Td>
        </Row>
        <Row alignItems="center">
          <Td borderBottomLeftRadius={12} width="calc(100% / 6)" height={56}>
            개인정보 보호담당자
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            교사
          </Td>
          <Td width="calc(100% / 6)" height={56}>
            구진영
          </Td>
          <Td borderBottomRightRadius={12} width="calc(100% / 6)" height={56}>
            051-970-1744
          </Td>
        </Row>
      </Table>
    </StyledResponsibilityTeacher>
  );
};

export default ResponsibilityTeacher;

const StyledResponsibilityTeacher = styled.div`
  width: 120%;
`;

const Table = styled.div`
  width: 100%;
`;
