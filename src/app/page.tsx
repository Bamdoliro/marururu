"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice";
import Schedule from "@/components/main/Schedule";
import Video from "@/components/main/Video/Video";
import Question from "@/components/main/Question";
import initMockAPI from "@/mocks";
import styled from "styled-components";
import Row from "@/components/common/Flex/Row";
import RecruitementCard from "@/components/main/RecruitmentCard/RecruitmentCard";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <Row gap="48px" justifyContent="center">
          <Video year={2024} />
          <Schedule />
        </Row>
        <Row gap="48px" justifyContent="center">
          <Notice />
          <Question />
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
