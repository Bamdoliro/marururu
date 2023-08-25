import { color, font } from '@maru/theme';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import Row from '../Flex/Row';
import NoLabelInput from '../Input/NoLabelInput';
import Radio from '../Radio/Radio';

interface Props {
    label: string;
    list: { value?: string; label: string; checked?: boolean }[] | string[];
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    etcEnabled?: boolean;
}

const RadioGroup = ({ label, list, name, value, onChange, etcEnabled = false }: Props) => {
    const isEtcValue = list
        .map((item) => (typeof item === 'string' ? item : item.value))
        .every((item) => item !== value);

    return (
        <div>
            <Label>{label}</Label>
            <RadioListBox>
                {list.map((item, index) => (
                    <label key={`radio-group ${name} ${index}`}>
                        <Row gap={8} alignItems="center">
                            <Radio
                                value={typeof item === 'string' ? item : item.value}
                                name={name}
                                checked={
                                    typeof item !== 'string'
                                        ? item.checked
                                            ? item.checked
                                            : value === item.value
                                        : value === item
                                }
                                onChange={onChange}
                            />
                            <RadioLabel>{typeof item === 'string' ? item : item.label}</RadioLabel>
                        </Row>
                    </label>
                ))}

                {etcEnabled && (
                    <label>
                        <Row gap={16}>
                            <Row gap={8} alignItems="center">
                                <Radio
                                    value=""
                                    name={name}
                                    checked={isEtcValue}
                                    onChange={onChange}
                                />
                                <RadioLabel style={{ margin: 0 }}>기타</RadioLabel>
                            </Row>
                            <div style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }}>
                                    <NoLabelInput
                                        name={name}
                                        textAlign="start"
                                        value={isEtcValue ? value : ''}
                                        onChange={onChange}
                                        width="136px"
                                    />
                                </div>
                            </div>
                        </Row>
                    </label>
                )}
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
