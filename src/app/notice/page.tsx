"use client";

import NoticeLayout from "@/layouts/NoticeLayout";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <NoticeLayout>
      <StyledNotice>as</StyledNotice>
    </NoticeLayout>
  );
};

export default NoticePage;

const StyledNotice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
