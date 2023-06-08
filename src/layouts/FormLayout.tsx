import Header from "@/components/common/Header";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  title: String;
}

const FormLayout = ({ children, title }: PropsType) => {
  return (
    <>
      <Header />
      <StyledFormLayout>
        <FormLayoutWrapper>
          <InfoBox>
            <Title>{title}</Title>
          </InfoBox>
          <ContentBox>{children}</ContentBox>
        </FormLayoutWrapper>
      </StyledFormLayout>
    </>
  );
};

export default FormLayout;

const StyledFormLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};

  margin-top: 44px;
`;

const FormLayoutWrapper = styled.div`
  width: 56.25%;
  height: 100%;
`;

const InfoBox = styled.div`
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 24px;
`;

const Title = styled.p`
  ${font.H3};
  color: ${color.gray900};
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0px 60px;
`;
