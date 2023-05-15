import { font } from "@/styles/font";
import { color } from "@/styles/color";
import styled from "styled-components";
import { Children, ReactNode } from "react";

interface PropsInterface {
  children: ReactNode;
}

const Message = ({ children }: PropsInterface) => {
  return <StyledMessage>{children}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
  font-size: ${font.p3};
  color: ${color.gray500};
  margin-top: 4px;
`;
