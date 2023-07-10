'use client';

import { CategoryFilter } from '@/components/faq';
import { FaqItem } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { useFaqListQuery } from '@/services/faq/queries';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const FAQ_LIST_DATA = [
    {
        id: 1,
        question: '하루 일과가 마치는 시간이 어떻게 되나요?',
        answer: '1교시부터 11교시까지 입니다.',
    },
    {
        id: 2,
        question: '입학하기 전에 선행학습을 해야하나요?',
        answer: '아니요, 필요하지 않습니다.',
    },
    {
        id: 3,
        question: '현재 다른 학교 고등학생인데 전학 갈 수 있나요?',
        answer: '전학은 불가능합니다.',
    },
];

const FaqPage = () => {
    // const faqListQuery = useFaqListQuery();

    return (
        <AppLayout style={{ padding: '0px 207px' }}>
            <StyledFaqPage>
                <Title>자주 묻는 질문</Title>
                <CategoryFilter />
                <FaqList>
                    {FAQ_LIST_DATA.map((item) => (
                        <FaqItem key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </FaqList>
            </StyledFaqPage>
        </AppLayout>
    );
};

export default FaqPage;

const StyledFaqPage = styled.div`
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;

const FaqList = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
`;
