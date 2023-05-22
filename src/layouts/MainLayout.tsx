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
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

const MainLayoutWrap = styled.div`
  display: grid;
`;
