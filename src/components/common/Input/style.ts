import styled from "styled-components";
import * as T from "styles/text.style";
import { color } from "styles/theme.style";

export const Input = styled.input`
  height: 48px;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};
  border-radius: 6px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${color.gray800};

  &::placeholder {
    color: ${color.gray500};
  }

  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

export const Desc = styled(T.context)`
  color: ${color.gray700};
  padding-bottom: 8px;
`;
