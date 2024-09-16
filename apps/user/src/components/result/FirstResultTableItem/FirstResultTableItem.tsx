import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import styled from 'styled-components';

interface Props {
  type: string;
  isPassed: boolean;
  changedToRegular: boolean;
}

const FirstResultTableItem = ({ type, isPassed, changedToRegular }: Props) => {
  const displayType = changedToRegular ? '특별 전형 →  일반 전형' : type;

  return (
    <StyledResultTableItem>
      <Column alignItems="center" gap={10}>
        {isPassed && (
          <Text fontType="p1" color={color.gray600}>
            {displayType}
          </Text>
        )}
        <Text fontType="H2" color={color.maruDefault}>
          {isPassed ? '합격을 축하합니다.' : '1차 합격자 명단에 없습니다.'}
        </Text>
      </Column>
    </StyledResultTableItem>
  );
};

export default FirstResultTableItem;

const StyledResultTableItem = styled.div`
  align-items: center;
  justify-content: space-between;
  display: inline-block;
  width: 100%;
  height: 64px;
  background-color: ${color.white};
`;
