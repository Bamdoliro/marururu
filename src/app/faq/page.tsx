"use client";

import Categories from "@/components/faq/CategoryBar";
import FaqItem from "@/components/faq/FaqItem";
import FaqLayout from "@/layouts/FaqLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const FaqPage = () => {
  return (
    <FaqLayout>
      <StyledFaqPage>
        <Title>자주 묻는 질문</Title>
        <Categories />
        <FaqList>
          <FaqItem question="adsa" answer="ass" />
          <FaqItem question="adsa" answer="ass" />
          <FaqItem question="adsa" answer="ass" />
        </FaqList>
      </StyledFaqPage>
    </FaqLayout>
  );
};

export default FaqPage;

const StyledFaqPage = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  ${font.H2}
  color: ${color.gray900};
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
