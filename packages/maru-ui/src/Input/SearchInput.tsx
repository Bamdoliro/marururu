import { IconSearch } from '@maru/icon';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { InputProps } from './Input.type';

const SearchInput = ({
  width = 320,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
}: InputProps) => {
  return (
    <StyledSearchInput>
      <Input
        style={{ width }}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
      />
      <IconSearch color={color.gray400} width={24} height={24} />
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  height: 40px;
  padding: 0 12px 0 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

const Input = styled.input`
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;
