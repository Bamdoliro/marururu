import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import React from 'react';
import { styled } from 'styled-components';
import Input from './Input';
import type { InputProps } from './Input.type';

interface ButtonInputProps extends InputProps {
  buttonText: string;
  enabled?: boolean;
  buttonWidth?: string;
  onClick: () => void;
}

const ButtonInput = ({
  width,
  label,
  name,
  value,
  placeholder,
  type = 'text',
  onChange,
  buttonText,
  onClick,
  enabled = false,
  readOnly,
  isError = false,
  errorMessage,
}: ButtonInputProps) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <StyledButtonInput>
        <Input
          width={width}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          isError={isError}
          errorMessage={errorMessage}
        />
        <Button onClick={onClick} disabled={!enabled}>
          {buttonText}
        </Button>
      </StyledButtonInput>
    </div>
  );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
  ${flex({ alignItems: 'center' })}
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button<{ disabled: boolean }>`
  ${font.btn2};
  color: ${color.white};
  background-color: ${(props) => (props.disabled ? color.gray400 : color.maruDefault)};
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 6px;
  height: 48px;
  padding: 10px 20px;
  flex-shrink: 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? color.gray400 : color.maruHoverd)};
  }
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
