import styled from "styled-components";
import * as T from "styles/text.style";
import { color } from "styles/theme.style";

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: 320px;
  height: 40px;
  padding: 10px 8px;

  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input`
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;
