import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
  backgroundColor?: string;
}

const AppLayout = ({ children, backgroundColor }: PropsInterface) => {
  return (
    <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
