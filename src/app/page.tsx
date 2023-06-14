"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice";
import Schedule from "@/components/main/Schedule";
import FAQ from "@/components/main/FAQ";
import initMockAPI from "@/mocks";
import styled from "styled-components";
import Row from "@/components/common/Flex/Row";
import SchoolRecruitCard from "@/components/main/SchoolRecruitCard";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <Row gap="48px" justifyContent="center">
          <SchoolRecruitCard />
          <Schedule />
        </Row>
        <Row gap="48px" justifyContent="center">
          <Notice />
          <FAQ />
        </Row>
      </StyledMain>
    </MainLayout>
  );
};

export default Home;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;
