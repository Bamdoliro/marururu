import QuestionIcon from "@/components/common/Icon/QuestionIcon";
import { useRouter } from "next/navigation";
import { font } from "@/styles/font";
import { color } from "@/styles/color";
import { styled } from "styled-components";
import { FAQ_PAGE_ROUTE } from "@/constants/router";

interface PropsType {
  id: number;
  title: string;
}

const QuestionItem = ({ id, title }: PropsType) => {
  const router = useRouter();

  return (
    <StyledQuestionItem onClick={() => router.push(`${FAQ_PAGE_ROUTE}/${id}`)}>
      <QuestionIcon />
      <Title>{title}</Title>
    </StyledQuestionItem>
  );
};

export default QuestionItem;

const StyledQuestionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
  cursor: pointer;
`;

const Title = styled.a`
  ${font.p1}
  color: ${color.gray750};
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 12px;
`;
