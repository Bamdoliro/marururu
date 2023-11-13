import { flex } from '@maru/utils';
import type { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const CheckBox = ({
  name,
  value,
  onChange,
  checked,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledCheckBox>
      <Input
        type="checkbox"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
    </StyledCheckBox>
  );
};

export default CheckBox;

const Input = styled.input`
  width: 18px;
  height: 18px;
`;

const StyledCheckBox = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 24px;
  height: 24px;
`;
