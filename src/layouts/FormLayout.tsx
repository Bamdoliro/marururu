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
        <StyledFormLayout >
          <Title>{title}</Title>
          {children}
        </StyledFormLayout> 
  );  
};

export default FormLayout;

const StyledFormLayout = styled.section`
  display: flex;
  flex-direction: column;
  margin: 61px auto 0px auto;
  width: 56%;
  height: 50%;
  background-color: ${color.white};
`;

const Title = styled.p`
  ${font.H3};
  color: ${color.gray900};
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 24px;
  margin-bottom: 40px;
` 
