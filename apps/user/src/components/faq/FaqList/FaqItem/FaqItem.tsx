import styled from 'styled-components';
import { IconFaq, IconAnswer, IconArrowBottom, IconArrowTop } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { Row } from '@maru/ui';
import { useState } from 'react';

interface PropsType {
    title: string;
    content: string;
}

const FaqItem = ({ content, title }: PropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledFaqItem>
            <QuestionBox onClick={() => setIsOpen((prev) => !prev)}>
                <Row gap="12px" alignItems="center">
                    <IconFaq
                        color={isOpen ? color.maruDefault : color.gray400}
                        width={24}
                        height={24}
                    />
                    <Question>{title}</Question>
                </Row>
                {isOpen ? (
                    <IconArrowTop color={color.gray600} width={24} height={24} />
                ) : (
                    <IconArrowBottom color={color.gray600} width={24} height={24} />
                )}
            </QuestionBox>
            {isOpen && (
                <AnswerBox>
                    <Row gap="12px" alignItems="center">
                        <IconAnswer color={color.gray400} width={24} height={24} />
                        <Answer>{content}</Answer>
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
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
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
    ${flex({ alignItems: 'center' })}
    background-color: ${color.white};
    padding: 24px;
`;

const Answer = styled.p`
    ${font.p2}
    color: ${color.gray900};
`;
