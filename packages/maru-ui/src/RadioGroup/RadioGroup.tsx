import { useBooleanState } from '@maru/hooks';
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
    const { value: isEtcClicked, setValue: setIsEtcClicked } = useBooleanState();

    const hasOtherOption = list.some((item) => {
        const isString = typeof item === 'string';

        return isString ? item === '기타' : item.value === '기타';
    });

    const handleRadioDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const selectedValue = e.target.value;

        if (selectedValue === '기타') {
            setIsEtcClicked(true);
        }
        onChange(e);
    };

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
                                value={radioValue}
                                name={name}
                                checked={isChecked}
                                onChange={handleRadioDataChange}
                            />
                            <RadioLabel>{radioLabel}</RadioLabel>
                        </Row>
                    );
                })}
                {hasOtherOption && value === '기타' && (
                    <EtcInput name={name} value={value} onChange={handleRadioDataChange} />
                )}
            </Row>
        </StyledRadioGroup>
    );
};

export default RadioGroup;

export const StyledRadioGroup = styled.div`
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
