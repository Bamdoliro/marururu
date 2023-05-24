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
        <Video title="2024학년도 입학 안내 영상" url="dj" />
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

// const Video = styled.div`
//   width: 56%;
//   height: 60%;
//   background-color: red;
// `;

const Question = styled.div`
  width: 48%;
  height: 33%;
  background-color: green;
`;

