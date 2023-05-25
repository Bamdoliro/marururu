import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import QuestionIcon from "@/components/common/Icon/QuestionIcon";

interface PropsType {
  id: number;
  title: string;
}

const QuestionItem = ({ title, id }: PropsType) => {
  const router = useRouter();

  return (
    <StyledQuestionItem>
      <QuestionIcon />
      <Title onClick={() => router.push(`/question/${id}`)}>{title}</Title>
    </StyledQuestionItem>
  );
};

export default QuestionItem;

const StyledQuestionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 33.3%;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
`;

const Title = styled.a`
  ${font.p1}
  color: ${color.gray750};
  cursor: pointer;
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 12px;
`;
