import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link";
import { useMainQuestionListQuery } from "@/services/main/queries";
import QuestionIcon from "@/components/common/Icon/QuestionIcon";

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
          <QuestionItem>
            <QuestionIcon />
            <QuestionItemTitle
              onClick={() => router.push(`/question/${item.id}`)}
            >
              {item.title}
            </QuestionItemTitle>
          </QuestionItem>
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

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 33.3%;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
`;

const QuestionItemTitle = styled.a`
  ${font.p1}
  color: ${color.gray750};
  cursor: pointer;
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 12px;
`;
