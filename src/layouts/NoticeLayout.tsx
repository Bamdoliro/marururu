import Header from "@/components/common/Header/header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const NoticeLayout = ({ children }: PropsType) => {
  return (
    <StyledNoticeLayout>
      <Header />
      <NoticeLayoutWrap>{children}</NoticeLayoutWrap>
    </StyledNoticeLayout>
  );
};

export default NoticeLayout;

const StyledNoticeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

const NoticeLayoutWrap = styled.div`
  padding-top: 48px;
  width: 72%;
  height: 100%;
`;
