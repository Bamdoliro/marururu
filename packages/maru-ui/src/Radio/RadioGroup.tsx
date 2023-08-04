import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';
import Radio from './Radio';

interface PropsType {
    label: string;
    list: { value?: string; content: string }[] | string[];
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup = ({ label, list, name, onChange }: PropsType) => {
    return (
        <div>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item) => (
                    <RadioLabel>
                        <Radio
                            key={typeof item === 'string' ? item : item.value}
                            value={typeof item === 'string' ? item : item.value}
                            name={name}
                            onChange={onChange}
                        />
                        <Content>{typeof item === 'string' ? item : item.content}</Content>
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
