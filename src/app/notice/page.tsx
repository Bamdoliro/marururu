"use client";

import NoticeItem from "@/components/notice/NoticeItem";
import NoticeLayout from "@/layouts/NoticeLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <NoticeLayout>
      <StyledNotice>
        <Title>공지사항</Title>
        <NoticeList>
          <NoticeItem title="테스트" date="2022.10.20" />
        </NoticeList>
      </StyledNotice>
    </NoticeLayout>
  );
};

export default NoticePage;

const StyledNotice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  ${font.H2}
  color: ${color.black};
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
