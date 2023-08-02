import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    formStep: string;
    completeOfNumber: string;
}

const CheckFormCompleteItem = ({ formStep, completeOfNumber }: PropsType) => {
    return (
        <StyledCheckFormCompleteItem>
            <FormStep>{formStep}</FormStep>
            <CompleteOfNumber>{completeOfNumber}</CompleteOfNumber>
        </StyledCheckFormCompleteItem>
    );
};

export default CheckFormCompleteItem;

const StyledCheckFormCompleteItem = styled.div`
    ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
    width: calc(50% - 8px);
    height: 72px;
    padding: 0px 28px;
    border: 1px solid ${color.gray200};
    background-color: ${color.white};
    border-radius: 12px;
`;

const FormStep = styled.p`
    ${font.p2};
    color: ${color.gray900};
`;

const CompleteOfNumber = styled.p`
    ${font.p2};
    color: ${color.gray900};
`;
