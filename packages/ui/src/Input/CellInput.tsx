import { color, font } from '@maru/design-token';
import { useRef } from 'react';
import { css, styled } from 'styled-components';
import type { InputProps } from './Input.type';
import React from 'react';

const CellInput = ({
  name,
  width = 80,
  textAlign = 'center',
  onChange,
  placeholder,
  value = 0,
  isError = false,
  readOnly,
  type = 'number',
}: InputProps) => {
  const cellInputRef = useRef<HTMLInputElement>(null);

  const handleSelectAllClick = () => {
    if (cellInputRef.current) {
      cellInputRef.current.select();
    }
  };

  return (
    <StyledCellInput
      ref={cellInputRef}
      name={name}
      style={{ width, textAlign }}
      onChange={onChange}
      onClick={handleSelectAllClick}
      type={type}
      value={value}
      placeholder={placeholder}
      $isError={isError}
      min={0}
      readOnly={readOnly}
    />
  );
};

export default CellInput;

const StyledCellInput = styled.input<{ $isError: boolean }>`
  ${font.p2}
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${color.gray400};
  background: ${color.white};
  color: ${color.gray900};

  &::placeholder {
    color: ${color.gray500};
  }

  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
