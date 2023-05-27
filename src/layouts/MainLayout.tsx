import Footer from "@/components/common/Footer/footer";
import Header from "@/components/common/Header/header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const MainLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <StyledMainLayout>
        <MainLayoutWrap>{children}</MainLayoutWrap>
      </StyledMainLayout>
      <Footer />
    </>
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
  margin-bottom: 250px;
`;

const MainLayoutWrap = styled.div`
  padding: 48px 0px;
  width: 86%;
  height: 100%;
`;
