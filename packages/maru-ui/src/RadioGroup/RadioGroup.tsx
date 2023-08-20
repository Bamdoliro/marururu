import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Row from '../Flex/Row';
import Radio from '../Radio/Radio';

interface PropsType {
    label: string;
    list: { value?: string; label: string }[] | string[];
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup = ({ label, list, name, value, onChange }: PropsType) => {
    return (
        <div>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item, index) => {
                    return (
                        <label key={`radio-group ${name} ${index}`}>
                            <Row gap={8} alignItems="center">
                                <Radio
                                    value={typeof item === 'string' ? item : item.value}
                                    name={name}
                                    checked={
                                        typeof item === 'string'
                                            ? value === item
                                            : value === item.value
                                    }
                                    onChange={onChange}
                                />
                                <RadioLabel>
                                    {typeof item === 'string' ? item : item.label}
                                </RadioLabel>
                            </Row>
                        </label>
                    );
                })}
            </RadioListBox>
        </div>
    );
};

export default RadioGroup;

const RadioListBox = styled.div`
    display: flex;
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 12px;
`;

const RadioLabel = styled.p`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
    height: 26px;
`;
