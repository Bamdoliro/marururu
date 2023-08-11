import { IconError } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
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
}: PropsType) => {
    const isFilledFormStep = maxCompleteOfNumber !== completeOfNumber;

    return (
        <StyledCheckFormComplete onClick={onClick}>
            <Row alignItems="center" gap={8}>
                <FormStep>{formStep}</FormStep>
                {isFilledFormStep && <IconError color={color.red} width={24} height={24} />}
            </Row>
            <CompleteOfNumber
                isFilledFormStep={
                    isFilledFormStep
                }>{`${completeOfNumber}/${maxCompleteOfNumber}`}</CompleteOfNumber>
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

const FormStep = styled.p`
    ${font.p2};
    color: ${color.gray900};
`;

const CompleteOfNumber = styled.p<{ isFilledFormStep: boolean }>`
    ${font.p2};
    color: ${(props) => (props.isFilledFormStep ? color.red : color.gray900)};
`;
