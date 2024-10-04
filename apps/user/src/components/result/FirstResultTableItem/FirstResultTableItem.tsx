import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
  type: string;
  isPassed: boolean;
  changedToRegular: boolean;
}

const FirstResultTableItem = ({ type, isPassed, changedToRegular }: Props) => {
  const passType = changedToRegular ? '특별 전형  -> 일반 전형' : type;

  return (
    <StyledResultTableItem>
      <Column alignItems="center" gap={10}>
        {isPassed ? (
          <Text fontType="p1" color={color.gray600}>
            {passType}
          </Text>
        ) : null}
        <Text fontType="H2" color={color.maruDefault}>
          {isPassed ? '합격을 축하합니다.' : '1차 합격자 명단에 없습니다.'}
        </Text>
      </Column>
    </StyledResultTableItem>
  );
};

export default FirstResultTableItem;

const StyledResultTableItem = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  display: inline-block;
  background-color: ${color.white};
  width: 100%;
`;
