import Header from "@/components/common/Header/header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const MainLayout = ({ children }: PropsType) => {
  return (
    <StyledMainLayout>
      <Header />
      <MainLayoutWrap>{children}</MainLayoutWrap>
    </StyledMainLayout>
  );
};

export default MainLayout;

const StyledMainLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

const MainLayoutWrap = styled.div`
  padding-top: 48px;
  width: 86%;
  height: 100%;
`;
