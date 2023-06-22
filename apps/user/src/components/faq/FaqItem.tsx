import styled from 'styled-components';
import TopArrowIcon from '../common/Icons/TopArrow';
import BottomArrowIcon from '../common/Icons/BottomArrow';
import AnswerIcon from '../common/Icons/Answer';
import QuestionIcon from '../common/Icons/Question';
import { color, font } from '@maru/styles';
import { Row } from '@maru/ui';
import { useState } from 'react';

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
                {isOpen ? <TopArrowIcon /> : <BottomArrowIcon />}
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
    ${font.p2}
    color: ${color.gray900};
`;
