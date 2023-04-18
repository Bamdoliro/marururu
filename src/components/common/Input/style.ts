import styled from "styled-components";
import { font } from "styles/text.style";
import { color } from "styles/theme.style";

export const Input = styled.input`
  ${font.p2}
  color: ${color.gray800};

  height: 48px;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray400};

  &::placeholder {
    color: ${color.gray500};
  }

  &:focus {
    border: 1px solid ${color.maruDefault};
    outline: 2px solid rgba(20, 112, 255, 0.25);
  }
`;

export const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};

  padding-bottom: 8px;
`;
