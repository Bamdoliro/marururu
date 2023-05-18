import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  backgroundColor?: string;
}

const BaseLayout = ({ children, backgroundColor }: PropsType) => {
  return (
    <StyledBaseLayout style={{ backgroundColor }}>{children}</StyledBaseLayout>
  );
};

export default BaseLayout;

const StyledBaseLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
