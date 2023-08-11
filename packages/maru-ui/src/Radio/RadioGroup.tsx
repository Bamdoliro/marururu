import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import Radio from './Radio';
import Row from '../Flex/Row';
import styled from 'styled-components';

interface PropsType {
    label: string;
    list: { value?: string; option: string }[] | string[];
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup = ({ label, list, name, value, onChange }: PropsType) => {
    return (
        <div>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item) => (
                    <Row gap={8} alignItems="center">
                        <Radio
                            key={typeof item === 'string' ? item : item.value}
                            value={typeof item === 'string' ? item : item.value}
                            name={name}
                            defaultChecked={
                                typeof item === 'string' ? value === item : value === item.value
                            }
                            onChange={onChange}
                        />
                        <Option>{typeof item === 'string' ? item : item.option}</Option>
                    </Row>
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

const Option = styled.p`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
    height: 26px;
`;

export default RadioGroup;
