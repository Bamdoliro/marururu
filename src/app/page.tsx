"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice/Notice";
import Schedule from "@/components/main/Schedule/Schedule";
import Video from "@/components/main/Video/Video";
import Question from "@/components/main/Question/Question";
import initMockAPI from "@/mocks";
import styled from "styled-components";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <ResposiveFlex>
          <Video year={2024} />
          <Schedule />
        </ResposiveFlex>
        <ResposiveFlex>
          <Notice />
          <Question />
        </ResposiveFlex>
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

const ResposiveFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
