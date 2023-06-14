"use client";

import LeftArrowIcon from "@/components/common/Icon/LeftArrow";
import Link from "@/components/common/Link";
import NoticeHeader from "@/components/notice/NoticeHeader";
import { NOTICE_PAGE_ROUTE } from "@/constants/router";
import NoticeLayout from "@/layouts/NoticeLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const NoticeDetailPage = () => {
  const router = useRouter();

  return (
    <NoticeLayout>
      <StyledNoticeDetailPage>
        <Link onClick={() => router.push(NOTICE_PAGE_ROUTE)} gap="2px">
          <LeftArrowIcon color={color.gray600} size={24} />
          <Title>공지사항</Title>
        </Link>
        <ContentsBox>
          <NoticeHeader title="테스트" date="2023.11.05" />
          <Content>이것은 테스트 입니다</Content>
        </ContentsBox>
      </StyledNoticeDetailPage>
    </NoticeLayout>
  );
};

export default NoticeDetailPage;

const StyledNoticeDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 7px;
`;

const Content = styled.pre`
  ${font.p2}
  color: ${color.gray900};
`;
