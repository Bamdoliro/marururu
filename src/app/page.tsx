"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice";
import Schedule from "@/components/main/Schedule";
import Video from "@/components/main/Video";
import FAQ from "@/components/main/FAQ";
import initMockAPI from "@/mocks";
import styled from "styled-components";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <Video year={2024} />
        <Schedule />
        <Notice />
        <FAQ />
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
