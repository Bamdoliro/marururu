import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const FaqLayout = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <StyledFaqLayout>{children}</StyledFaqLayout>
      <Footer />
    </>
  );
};

export default FaqLayout;

const StyledFaqLayout = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
  padding: 0px 207px;
`;
