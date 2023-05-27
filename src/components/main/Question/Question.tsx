import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link/link";
import { useMainQuestionListQuery } from "@/features/main";

const Question = () => {
  const router = useRouter();
  const { data } = useMainQuestionListQuery();

  return (
    <StyledQuestion>
      <Link onClick={() => router.push("/question")} gap="8px">
        <Title>자주묻는 질문</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </Link>
      <QuestionList>
        {data.map((item) => (
          <QuestionItem key={item.id} id={item.id} title={item.title} />
        ))}
      </QuestionList>
    </StyledQuestion>
  );
};

export default Question;

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  max-width: 596px;
  height: 242px;
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
