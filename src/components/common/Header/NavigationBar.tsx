import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const NavigationBar = ({ children }: PropsType) => {
  return (
    <StyledNavigationBar>
      <NavigationBarWrap>{children}</NavigationBarWrap>
    </StyledNavigationBar>
  );
};

export default NavigationBar;

const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray200};
`;

const NavigationBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 86%;
  height: 100%;
`;
