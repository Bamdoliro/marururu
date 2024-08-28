import { color, font } from '@maru/design-token';
import type { TextareaHTMLAttributes } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import ConditionalMessage from './ConditionalMessage';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  limit: number;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  message?: string;
}

const Textarea = ({
  limit,
  label,
  name,
  value,
  onChange,
  isError = false,
  errorMessage,
  message,
}: Props) => {
  const textValue = value as string;

  return (
    <div style={{ position: 'relative' }}>
      {label && <Label>{label}</Label>}
      <div style={{ position: 'relative' }}>
        <StyledTextarea
          value={textValue}
          name={name}
          onChange={onChange}
          placeholder={`${limit}자 이내로 작성해주세요.`}
          maxLength={limit}
          $isError={isError}
        />
      </div>
      <TextCount>
        {limit - textValue.length}/{limit}
      </TextCount>
      <ConditionalMessage
        isError={isError}
        errorMessage={errorMessage}
        message={message}
      />
    </div>
  );
};

export default Textarea;

const StyledTextarea = styled.textarea<{ $isError: boolean }>`
  ${font.p2}
  resize: none;
  padding: 10px 16px;
  border: 1px solid ${color.gray400};
  border-radius: 6px;
  width: 100%;
  height: 400px;
  &::placeholder {
    color: ${color.gray500};
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

const TextCount = styled.span`
  ${font.p2}
  color: ${color.gray500};
  position: absolute;
  right: 20px;
  bottom: 14px;
`;

const Label = styled.p`
  ${font.H5}
  color: ${color.gray900};
  margin-bottom: 8px;
`;
