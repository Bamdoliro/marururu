import { useFaqListQuery } from '@/services/faq/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FaqItem from './FaqItem/FaqItem';

const FaqList = () => {
    const { data: faqListData } = useFaqListQuery('TOP_QUESTION');

    if (!faqListData) return null;

    return (
        <StyledFaqList>
            {faqListData.map(({ title, content }, index) => (
                <FaqItem key={`faq ${index}`} title={title} content={content} />
            ))}
        </StyledFaqList>
    );
};

export default FaqList;

const StyledFaqList = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
`;
