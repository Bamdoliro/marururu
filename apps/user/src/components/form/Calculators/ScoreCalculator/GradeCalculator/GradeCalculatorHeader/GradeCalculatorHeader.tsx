import { Column, Row, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const GradeCalculatorHeader = () => {
  return (
    <StyledGradeCalculatorHeader>
      <Th borderTopLeftRadius={12} width={123} height={100}>
        과목
      </Th>
      <Column width={380}>
        <Th width="100%" height={50}>
          2학년
        </Th>
        <Row>
          <Th styleType="SECONDARY" width="100%" height={50}>
            1학기
          </Th>
          <Th styleType="SECONDARY" width="100%" height={50}>
            2학기
          </Th>
        </Row>
      </Column>
      <Column width={190}>
        <Th width="100%" height={50}>
          3학년
        </Th>
        <Th styleType="SECONDARY" width="100%" height={50}>
          1학기
        </Th>
      </Column>
      <Th borderTopRightRadius={12} width={123} height={100}>
        삭제
      </Th>
    </StyledGradeCalculatorHeader>
  );
};

export default GradeCalculatorHeader;

const StyledGradeCalculatorHeader = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100px;
`;
