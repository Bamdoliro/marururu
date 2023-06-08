"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice";
import Schedule from "@/components/main/Schedule";
import Video from "@/components/main/Video";
import Question from "@/components/main/Question";
import initMockAPI from "@/mocks";
import styled from "styled-components";
import ApplicationCard from "@/components/main/RecruitmentCard/RecruitmentCard";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <ApplicationCard
          goal="1차 합격자 발표까지"
          date="2023-11-02"
          status="1차 합격자 발표"
        />
        <Schedule />
        <Notice />
        <Question />
      </StyledMain>
    </MainLayout>
  );
};

export default Home;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7% 4%;
  width: 100%;
  height: 100%;
`;
