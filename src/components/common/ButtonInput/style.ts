import styled from "styled-components";
import * as I from 'components/common/Input/style';
import { font } from "styles/text.style";
import { color } from "styles/theme.style";

export const Container = styled.div`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 1fr 60px;
`;

export const Desc = styled(I.Desc)`
  grid-column: 1 / 3;
`;

export const Button = styled.button`
  ${font.btn1};
  color: ${color.white};
  background-color: #257CFF;
  border-radius: 6px;
`;
