import Header from "@/components/common/Header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const NoticeLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <StyledNoticeLayout>{children}</StyledNoticeLayout>
    </>
  );
};

export default NoticeLayout;

const StyledNoticeLayout = styled.section`
  width: 100vw;
  flex-grow: 1;
  background-color: ${color.white};
  padding: 0px 207px;
`;
