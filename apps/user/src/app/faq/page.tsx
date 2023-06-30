'use client';

import CategoryFilter from '@/components/faq/CategoryFilter/CategoryFilter';
import FaqItem from '@/components/faq/FaqItem/FaqItem';
import FaqLayout from '@/layouts/FaqLayout';
import { useFaqListQuery } from '@/services/faq/queries';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const FaqPage = () => {
    const faqListQuery = useFaqListQuery();

    return (
        <FaqLayout>
            <StyledFaqPage>
                <Title>자주 묻는 질문</Title>
                <CategoryFilter />
                <FaqList>
                    {faqListQuery.data?.map((item) => (
                        <FaqItem key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </FaqList>
            </StyledFaqPage>
        </FaqLayout>
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
