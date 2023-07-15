import { color, font } from '@maru/theme';
import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import { styled } from 'styled-components';
import Radio from './Radio';

interface RadioGroupPropsType {
    label: string;
    list: { value?: string; content: string }[] | string[];
    name: string;
    onChange?: ChangeEventHandler;
}

const RadioGroup = ({ label, list, name, onChange }: RadioGroupPropsType) => {
    return (
        <StyledRadioGroup>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item) => (
                    <Radio
                        value={typeof item === 'string' ? item : item.value}
                        content={typeof item === 'string' ? item : item.content}
                        name={name}
                        onChange={onChange}
                    />
                ))}
            </RadioListBox>
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
