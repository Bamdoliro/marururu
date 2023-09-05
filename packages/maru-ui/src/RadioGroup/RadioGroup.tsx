import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Row from '../Flex/Row';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';

interface Radio {
    value: string;
    label: string;
}

interface Props {
    label: string;
    list: Radio[] | string[];
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

interface EtcInputProps {
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const EtcInput = ({ name, value, onChange }: EtcInputProps) => {
    return (
        <div style={{ position: 'relative' }}>
            <InputBox>
                <Input
                    name={name}
                    textAlign="start"
                    value={value}
                    onChange={onChange}
                    width="136px"
                />
            </InputBox>
        </div>
    );
};

const RadioGroup = ({ label, list, name, value, onChange }: Props) => {
    return (
        <StyledRadioGroup>
            <Label>{label}</Label>
            <Row>
                {list.map((item, index) => {
                    const isString = typeof item === 'string';
                    const radioLabel = isString ? item : item.label;
                    const radioValue = isString ? item : item.value;
                    const isChecked = isString ? item === value : value === item.value;

                    return (
                        <Row key={`radio ${name} ${index}`} gap={8} alignItems="center">
                            <Radio
                                name={name}
                                value={radioValue}
                                checked={isChecked}
                                onChange={onChange}
                            />
                            <RadioLabel>{radioLabel}</RadioLabel>
                        </Row>
                    );
                })}
            </Row>
        </StyledRadioGroup>
    );
};

export default RadioGroup;

const StyledRadioGroup = styled.div`
    width: 100%;
    height: 100%;
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 12px;
`;

const RadioLabel = styled.label`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
`;

const InputBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
