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
  gap: 8% 4%;
  width: 100%;
  height: 100%;
`;

const Video = styled.div`
  width: 56%;
  height: 451px;
  border: 1px solid red;
  background-color: red;
`;

const Schedule = styled.div`
  width: 40%;
  height: 451px;
  border: 1px solid blue;
  background-color: blue;
`;

const Notice = styled.div`
  width: 48%;
  height: 242px;
  border: 1px solid purple;
  background-color: purple;
`;

const Question = styled.div`
  width: 48%;
  height: 242px;
  border: 1px solid green;
  background-color: green;
`;
