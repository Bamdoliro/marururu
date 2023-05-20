"use client";

import NoticeItem from "@/components/notice/NoticeItem";
import NoticeLayout from "@/layouts/NoticeLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { NoticeListDatas } from "@/fixtures/notice";
import styled from "styled-components";

const NoticePage = () => {
  return (
    <NoticeLayout>
      <StyledNotice>
        <Title>공지사항</Title>
        <NoticeList>
          {NoticeListDatas &&
            NoticeListDatas.map((item) => (
              <NoticeItem
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
              />
            ))}
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
  color: ${color.gray900};
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
