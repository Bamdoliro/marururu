import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import styled from 'styled-components';

interface Props {
  type: string;
  isPassed: boolean;
}

const FinalResultTableItem = ({ type, isPassed }: Props) => {
  return (
    <StyledResultTableItem>
      <Column alignItems="center" gap={10}>
        <Text fontType="p1" color={color.gray600}>
          {type}
        </Text>
        <Text fontType="H2" color={color.maruDefault}>
          {isPassed ? '합격을 축하합니다.' : '최종 합격자 명단에 없습니다.'}
        </Text>
      </Column>
    </StyledResultTableItem>
  );
};

export default FinalResultTableItem;

const StyledResultTableItem = styled.div`
  align-items: center;
  justify-content: space-between;
  display: inline-block;
  width: 100%;
  height: 64px;
  background-color: ${color.white};
`;
