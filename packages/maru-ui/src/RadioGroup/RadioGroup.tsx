import { useBooleanState } from '@maru/hooks';
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
    /* 이렇게 안하면 데이터 바꿀 때 기타에 값이 들어가더라고요... 근데 이름 바꾸고 싶네요.. */
    const isEtcClickedInitial = list
        .map((item) => (typeof item === 'string' ? item : item.value))
        .every((item) => item !== value);

    const {
        value: isEtcClicked,
        setTrue: setIsEtcClickedTrue,
        setFalse: setIsEtcClickedFalse,
    } = useBooleanState(isEtcClickedInitial);

    const handleItemChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange(event);
        setIsEtcClickedFalse();
    };

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
                                    !isEtcClicked &&
                                    (typeof item === 'string'
                                        ? value === item
                                        : item.checked || value === item.value)
                                }
                                onChange={handleItemChange}
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
                                    checked={isEtcClicked}
                                    onChange={setIsEtcClickedTrue}
                                />
                                <RadioLabel style={{ margin: 0 }}>기타</RadioLabel>
                            </Row>
                            {isEtcClicked && (
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
                                            value={isEtcClickedInitial ? value : ''}
                                            onChange={onChange}
                                            width="136px"
                                        />
                                    </div>
                                </div>
                            )}
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
