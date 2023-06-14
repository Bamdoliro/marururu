import Header from "@/components/common/Header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  backgroundColor?: string;
}

const AppLayout = ({ children, backgroundColor }: PropsType) => {
  return (
    <>
      <Header />
      <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  width: 100vw;
  flex-grow: 1;
  background-color: ${color.white};
`;
