import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import styled from 'styled-components';

interface Props {
  isPassed: boolean;
}

const FinalResultTableItem = ({ isPassed }: Props) => {
  return (
    <StyledResultTableItem>
      <Column alignItems="center">
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
  background-color: ${color.white};
`;
