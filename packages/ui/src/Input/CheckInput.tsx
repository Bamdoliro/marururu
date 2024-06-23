import { color, font } from '@maru/design-token';
import { IconError } from '@maru/icon';
import React from 'react';
import styled, { css } from 'styled-components';
import ConditionalMessage from './ConditionalMessage';
import type { InputProps } from './Input.type';

const CheckInput = ({
  width = 320,
  label,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  errorMessage,
  message,
  readOnly,
  textAlign,
  isError = false,
}: InputProps) => {
  return (
    <div style={{ width }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: 'relative' }}>
        <StyledInput
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          readOnly={readOnly}
          style={{ textAlign }}
          $isError={isError}
        />
        {isError && (
          <IconError
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            color={color.red}
            width={24}
          />
        )}
      </div>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

export default CheckInput;

const StyledInput = styled.input<{ $isError: boolean }>`
  ${font.p2}
  color: ${color.gray800};
  height: 48px;
  width: 100%;
  padding: 10px 16px;
  background-color: ${color.gray100};
  border-radius: 6px;

  &::placeholder {
    color: ${color.gray400};
  }
  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
        outline: 2px solid rgba(244, 67, 54, 0.25);
      }
    `}
`;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;
