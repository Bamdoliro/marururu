import { flex } from '@maru/utils';
import FaqItem from './FaqItem/FaqItem';
import { useFaqListQuery } from '@/services/faq/queries';
import styled from 'styled-components';

const FaqList = () => {
    const { data: faqListData } = useFaqListQuery('TOP_QUESTION');

    if (!faqListData) return null;

    return (
        <StyledFaqList>
            {faqListData.map(({ title, content }) => (
                <FaqItem title={title} content={content} />
            ))}
        </StyledFaqList>
    );
};

export default FaqList;

const StyledFaqList = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
`;
