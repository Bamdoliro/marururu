import { useInterval } from '@maru/hooks';
import { color, font } from '@maru/design-token';
import { flex, formatTime } from '@maru/utils';
import type { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import Row from '../Flex/Row';
import Text from '../Text/Text';
import ConditionalMessage from './ConditionalMessage';
import type { InputProps } from './Input.type';

interface TimeLimitInputProps extends InputProps {
  timerTime: number;
  setTimerTime: Dispatch<SetStateAction<number>>;
  buttonText: string;
  enabled?: boolean;
  onClick: () => void;
}

const TimeLimitInput = ({
  width = 320,
  name,
  label,
  message,
  onChange,
  maxLength,
  timerTime,
  setTimerTime,
  isError = false,
  errorMessage,
  onClick,
  buttonText,
  enabled = false,
}: TimeLimitInputProps) => {
  useInterval(() => {
    setTimerTime((prev) => prev - 1);
    if (timerTime <= 0) {
      setTimerTime(0);
    }
  }, 1000);

  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <Row gap={8} alignItems="center" style={{ position: 'relative' }}>
        <StyledTimeLimitInput $isError={isError}>
          <Input onChange={onChange} type="text" name={name} maxLength={maxLength} />
          <Text fontType="p3" color={color.red}>
            {formatTime(timerTime)}
          </Text>
        </StyledTimeLimitInput>
        <Button onClick={onClick} enabled={enabled}>
          {buttonText}
        </Button>
      </Row>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

export default TimeLimitInput;

const StyledTimeLimitInput = styled.div<{ $isError: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  gap: 10px;
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${(props) => (props.$isError ? color.red : color.maruDefault)};
    ${(props) =>
      !props.$isError &&
      css`
        outline: 2px solid rgba(20, 112, 255, 0.25);
      `}
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
      }
    `};
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

export const Button = styled.button<{ enabled: boolean }>`
  ${font.btn2};
  color: ${color.white};
  background-color: ${(props) => (props.enabled ? color.gray400 : color.maruDefault)};
  pointer-events: ${(props) => props.enabled && 'none'};
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 6px;
  height: 48px;
  padding: 10px 20px;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) => (props.enabled ? color.gray400 : color.maruHoverd)};
    cursor: ${(props) => (props.enabled ? 'default' : 'pointer')};
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
