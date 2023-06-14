import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useState } from "react";
import styled from "styled-components";
import Row from "../common/Flex/Row";
import AnswerIcon from "../common/Icon/Answer";
import DownArrowIcon from "../common/Icon/DownArrow";
import QuestionIcon from "../common/Icon/Question";
import UpArrowIcon from "../common/Icon/UpArrow";

interface PropsType {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledFaqItem>
      <QuestionBox onClick={() => setIsOpen((prev) => !prev)}>
        <Row gap="12px" alignItems="center">
          <QuestionIcon color={color.gray400} />
          <Question>{question}</Question>
        </Row>
        {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
      </QuestionBox>
      {isOpen && (
        <AnswerBox>
          <Row gap="12px" alignItems="center">
            <AnswerIcon />
            <Answer>{answer}</Answer>
          </Row>
        </AnswerBox>
      )}
    </StyledFaqItem>
  );
};

export default FaqItem;

const StyledFaqItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${color.gray300};
`;

const QuestionBox = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.white};
  padding: 24px;
  cursor: pointer;
`;

const Question = styled.p`
  ${font.p1}
  color: ${color.gray900};
`;

const AnswerBox = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  background-color: ${color.white};
  padding: 24px;
`;

const Answer = styled.p`
  ${font.p1}
  color: ${color.gray900};
`;
