import { Column, Row, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const GradeCalculatorHeader = () => {
  return (
    <StyledGradeCalculatorHeader>
      <Th borderTopLeftRadius={12} width="100%" height={150}>
        과목
      </Th>
      <Column width="100%">
        <Th width={693} height={100} borderTopRightRadius={12}>
          성취수준
        </Th>
        <Row>
          <Column alignItems="center" width="100%">
            <Th width={379} height={50}>
              2학년
            </Th>
            <Row width={379}>
              <Th styleType="SECONDARY" width={190} height={50}>
                1학기
              </Th>
              <Th styleType="SECONDARY" width={190} height={50}>
                2학기
              </Th>
            </Row>
          </Column>
          <Column alignItems="center" width="100%">
            <Th width={190.1} height={50}>
              3학년
            </Th>
            <Th styleType="SECONDARY" width={190.1} height={50}>
              1학기
            </Th>
          </Column>
          <Th width="100%" height={100}>
            삭제
          </Th>
        </Row>
      </Column>
    </StyledGradeCalculatorHeader>
  );
};

export default GradeCalculatorHeader;

const StyledGradeCalculatorHeader = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'stretch' })}
  width: 100%;
  height: 150px;
`;
