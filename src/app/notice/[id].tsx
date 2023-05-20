"use client";

import Column from "@/components/common/Flex/column";
import NoticeInfo from "@/components/notice/NoticeInfo";
import NoticeLayout from "@/layouts/NoticeLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { styled } from "styled-components";

const NoticeDetailPage = () => {
  return (
    <NoticeLayout>
      <StyledNoticeDetail>
        <Title>공지사항</Title>
        <Column gap="28px">
          <NoticeInfo title="테스트" date="2023.11.05" />
          <Content>이것은 테스트 입니다</Content>
        </Column>
      </StyledNoticeDetail>
    </NoticeLayout>
  );
};

export default NoticeDetailPage;

const StyledNoticeDetail = styled.div`
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

const Content = styled.pre`
  ${font.p3}
  color: ${color.gray900};
`;
