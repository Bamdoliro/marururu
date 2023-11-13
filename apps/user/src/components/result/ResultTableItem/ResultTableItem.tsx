import { color } from '@maru/design-token';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
  id: number;
  name: string;
  type: string;
  isPassed: boolean;
}

const ResultTableItem = ({ id, name, type, isPassed }: Props) => {
  return (
    <StyledResultTableItem>
      <Row alignItems="center" gap={48}>
        <Text fontType="p2" color={color.gray900}>
          {id}
        </Text>
        <Text fontType="p2" color={color.gray900}>
          {name}
        </Text>
        <Text fontType="p2" color={color.gray900}>
          {type}
        </Text>
      </Row>
      <Text fontType="p2" color={color.gray900}>
        {isPassed ? '합격' : '불합격'}
      </Text>
    </StyledResultTableItem>
  );
};

export default ResultTableItem;

const StyledResultTableItem = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 64px;
  padding: 0px 64px 0px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
`;
