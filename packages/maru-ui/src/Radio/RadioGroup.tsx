import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';
import Radio from './Radio';

interface RadioGroupPropsType {
    label: string;
    list: { value?: string; label: string }[] | string[];
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup = ({ label, list, name, value, onChange }: RadioGroupPropsType) => {
    return (
        <div>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item, idx) => (
                    <RadioLabel key={`${name} ${idx}`}>
                        <Radio
                            value={typeof item === 'string' ? item : item.value}
                            name={name}
                            defaultChecked={
                                typeof item === 'string' ? value === item : value === item.value
                            }
                            onChange={onChange}
                        />
                        <Content>{typeof item === 'string' ? item : item.label}</Content>
                    </RadioLabel>
                ))}
            </RadioListBox>
        </div>
    );
};

const RadioListBox = styled.div`
    display: flex;
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 12px;
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Content = styled.p`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
    height: 26px;
`;

export default RadioGroup;
