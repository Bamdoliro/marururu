import { flex } from '@maru/utils';
import type { InputHTMLAttributes } from 'react';
import React from 'react';
import { styled } from 'styled-components';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ value, name, checked, onChange, disabled }: Props) => {
  return (
    <StyledRadio>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </StyledRadio>
  );
};

const StyledRadio = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 24px;
  height: 24px;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
`;

export default Radio;
