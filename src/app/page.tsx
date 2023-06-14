"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice";
import Schedule from "@/components/main/Schedule";
import initMockAPI from "@/mocks";
import styled from "styled-components";
import Row from "@/components/common/Flex/Row";
import Faq from "@/components/main/FAQ";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMainPage>
        <Row gap="48px" height="451px" width="100%" justifyContent="center">
          <Schedule />
        </Row>
        <Row gap="48px" width="100%" height="242px" justifyContent="center">
          <Notice />
          <Faq />
        </Row>
      </StyledMainPage>
    </MainLayout>
  );
};

export default Home;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 100%;
`;
