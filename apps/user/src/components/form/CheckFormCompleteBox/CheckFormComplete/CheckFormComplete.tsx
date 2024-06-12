import { IconError } from '@maru/icon';
import { color } from '@maru/design-token';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
  formStep: string;
  maxCompleteOfNumber: number;
  completeOfNumber: number;
  onClick: () => void;
}

const CheckFormComplete = ({
  formStep,
  maxCompleteOfNumber,
  completeOfNumber,
  onClick,
}: Props) => {
  const isFilledFormStep = maxCompleteOfNumber !== completeOfNumber;

  return (
    <StyledCheckFormComplete onClick={onClick}>
      <Row alignItems="center" gap={8}>
        <Text fontType="p2" color={color.gray900}>
          {formStep}
        </Text>
        {isFilledFormStep && <IconError color={color.red} width={24} height={24} />}
      </Row>
      <Text
        fontType="p2"
        color={isFilledFormStep ? color.red : color.gray900}
      >{`${completeOfNumber}/${maxCompleteOfNumber}`}</Text>
    </StyledCheckFormComplete>
  );
};

export default CheckFormComplete;

const StyledCheckFormComplete = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
  width: calc(50% - 8px);
  height: 72px;
  padding: 0px 28px;
  border: 1px solid ${color.gray200};
  background-color: ${color.white};
  border-radius: 12px;
  cursor: pointer;
`;
