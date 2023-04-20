import styled from "styled-components";
import { font } from "styles/text.style";
import { color } from "styles/theme.style";

export const Container = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 60px;
`;

export const Desc = styled.p`
  ${font.context}
  color: ${color.gray700};
  grid-column: 1 / 3;
`;

export const Button = styled.button`
  ${font.btn1};
  color: ${color.white};
  background-color: #257CFF;
  border-radius: 6px;
`;
