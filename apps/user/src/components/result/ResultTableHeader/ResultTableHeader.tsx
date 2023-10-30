import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const ResultTableHeader = () => {
  return (
    <StyledResultTableHeader>
      <Row alignItems="center" gap={48}>
        <Text fontType="p2" color={color.gray600}>
          수험번호
        </Text>
        <Text fontType="p2" color={color.gray600}>
          이름
        </Text>
        <Text fontType="p2" color={color.gray600}>
          전형
        </Text>
      </Row>
      <Text fontType="p2" color={color.gray600}>
        합격 여부
      </Text>
    </StyledResultTableHeader>
  );
};

export default ResultTableHeader;

const StyledResultTableHeader = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 64px;
  padding: 0px 64px 0px 32px;
  background-color: ${color.gray50};
  border-radius: 12px;
`;
