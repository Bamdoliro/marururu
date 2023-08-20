import { IconAnswer, IconArrowBottom, IconArrowTop, IconFaq } from '@maru/icon';
import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import styled from 'styled-components';

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
                    <Text fontType="p1" color={color.gray900}>
                        {title}
                    </Text>
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
                        <Text fontType="p2" color={color.gray900}>
                            {content}
                        </Text>
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

const AnswerBox = styled.div`
    height: 77px;
    ${flex({ alignItems: 'center' })}
    background-color: ${color.white};
    padding: 24px;
`;
