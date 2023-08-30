import { IconAnswer, IconArrowBottom, IconArrowTop, IconFaq } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    content: string;
}

const FaqItem = ({ content, title }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledFaqItem>
            <QuestionBox onClick={() => setIsOpen((prev) => !prev)}>
                <Row alignItems="center">
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
                    <Row alignItems="flex-start">
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
    height: fit-content;
    min-height: 77px;
    padding: 0px 24px;
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    background-color: ${color.white};
    cursor: pointer;
`;

const AnswerBox = styled.div`
    height: fit-content;
    min-height: 77px;
    padding: 0px 24px;
    ${flex({ alignItems: 'center' })}
    background-color: ${color.white};
`;

const Question = styled.p`
    ${font.p1};
    color: ${color.gray900};
    margin-left: 12px;
`;

const Answer = styled.p`
    ${font.p2};
    color: ${color.gray900};
    width: calc(100% - 24px);
    margin-left: 12px;
`;
