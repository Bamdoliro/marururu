import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { InputPropsType } from './Input.type';
import styled from 'styled-components';
import Message from './Message';
import { formatTime } from '@maru/utils';
import { useInterval } from '@maru/hooks';
import { Dispatch, SetStateAction } from 'react';

interface TimeLimitInputPropsType extends InputPropsType {
    timerTime: number;
    setTimerTime: Dispatch<SetStateAction<number>>;
}

const TimeLimitInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    type = 'text',
    msg,
    onChange,
    maxLength,
    timerTime,
    setTimerTime,
}: TimeLimitInputPropsType) => {
    useInterval(() => {
        setTimerTime((prev) => prev - 1);
        if (timerTime <= 0) {
            setTimerTime(0);
        }
    }, 1000);

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledTimeLimitInput>
                <Input
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    maxLength={maxLength}
                />
                <Timer>{formatTime(timerTime)}</Timer>
            </StyledTimeLimitInput>
            {msg && <Message>{msg}</Message>}
        </div>
    );
};

export default TimeLimitInput;

const StyledTimeLimitInput = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    gap: 10px;
    height: 48px;
    padding: 10px 16px;
    background-color: ${color.white};
    border: 1px solid ${color.gray400};
    border-radius: 6px;

    &:focus-within {
        border: 1px solid ${color.maruDefault};
        outline: 2px solid rgba(20, 112, 255, 0.25);
    }
`;

const Input = styled.input`
    ${font.p2}
    color: ${color.gray800};
    width: 100%;
    height: 100%;

    &::placeholder {
        color: ${color.gray500};
    }
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    padding-bottom: 8px;
`;

const Timer = styled.p`
    ${font.p3}
    color: ${color.red};
`;
