import styled from "styled-components";
import { color } from "styles/theme.style";

export const PreviewInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 40px;
  padding: 10px 16px;

  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  &:focus-within {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

export const Input = styled.input`
  color: ${color.gray800};
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${color.gray500};
  }
`;
