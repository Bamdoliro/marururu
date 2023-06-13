import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link";
import { useMainQuestionListQuery } from "@/services/main/queries";
import QuestionItem from "./items/QuestionItem";
import { FAQ_PAGE_ROUTE } from "@/constants/router";

const Faq = () => {
  const router = useRouter();
  const { data } = useMainQuestionListQuery();

  return (
    <StyledFaq>
      <Link onClick={() => router.push(FAQ_PAGE_ROUTE)} gap="8px">
        <Title>자주묻는 질문</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </Link>
      <QuestionList>
        {data.map((item) => (
          <QuestionItem key={item.id} id={item.id} title={item.title} />
        ))}
      </QuestionList>
    </StyledFaq>
  );
};

export default Faq;

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 48%;
  height: 33%;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const QuestionList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
