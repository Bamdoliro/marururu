"use client";

import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";

const Home = () => {
  return (
    <MainLayout>
      <StyledMain>
        <Video />
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

const Video = styled.div`
  width: 56%;
  height: 60%;
  background-color: red;
`;

const Schedule = styled.div`
  width: 40%;
  height: 60%;
  background-color: blue;
`;

const Notice = styled.div`
  width: 48%;
  height: 33%;
  background-color: purple;
`;

const Question = styled.div`
  width: 48%;
  height: 33%;
  background-color: green;
`;
