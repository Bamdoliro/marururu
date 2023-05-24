"use client";

import MainLayout from "@/layouts/MainLayout";
import Notice from "@/components/main/Notice/Notice";
import Schedule from "@/components/main/Schedule/Schedule";
import Video from "@/components/main/Video/Video";
import styled from "styled-components";

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <Video year={2024} />
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

const Question = styled.div`
  width: 48%;
  height: 33%;
  background-color: green;
`;
