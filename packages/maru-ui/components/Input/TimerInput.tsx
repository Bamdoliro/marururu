import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { InputPropsType } from './type';
import styled from 'styled-components';
import Message from './Message';
import formatTime from '../../utils/formatTime';
import useTimer from '../../hooks/useTimer';
import { Dispatch, SetStateAction } from 'react';

interface TimerInputPropsType extends InputPropsType {
    time: number;
    setTime: Dispatch<SetStateAction<number>>;
}

const TimerInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    type = 'text',
    msg,
    onChange,
    maxLength,
    time,
    setTime,
}: TimerInputPropsType) => {
    useTimer(time, setTime);

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledTimerInput>
                <Input
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    maxLength={maxLength}
                />
                <Timer>{formatTime(time)}</Timer>
            </StyledTimerInput>
            {msg && <Message>{msg}</Message>}
        </div>
    );
};

export default TimerInput;

const StyledTimerInput = styled.div`
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
