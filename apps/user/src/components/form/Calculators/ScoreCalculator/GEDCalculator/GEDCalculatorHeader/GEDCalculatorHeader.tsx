import { Row, Th } from '@maru/ui';
import styled from 'styled-components';

const GEDCalculatorHeader = () => {
  return (
    <StyledGEDCalculatorHeader>
      <Row>
        <Th borderTopLeftRadius={12} width={123} height={64}>
          과목
        </Th>
        <Th width={570} height={64}>
          성적
        </Th>
        <Th borderTopRightRadius={12} width={123} height={64}>
          삭제
        </Th>
      </Row>
    </StyledGEDCalculatorHeader>
  );
};

export default GEDCalculatorHeader;

const StyledGEDCalculatorHeader = styled.div`
  width: 100%;
  height: 64px;
`;
