import { color, font } from '@maru/theme';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface RadioGroupPropsType {
    label: string;
    children: ReactNode[];
}

const RadioGroup = ({ label, children }: RadioGroupPropsType) => {
    return (
        <StyledRadioGroup>
            <Label>{label}</Label>
            <RadioListBox>{children}</RadioListBox>
        </StyledRadioGroup>
    );
};

const StyledRadioGroup = styled.div``;

const RadioListBox = styled.div`
    display: flex;
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 12px;
`;

export default RadioGroup;
