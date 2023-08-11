import { flex } from '@maru/utils';
import FaqItem from './FaqItem/FaqItem';
import { useFaqListQuery } from '@/services/faq/queries';
import styled from 'styled-components';

interface PropsType {
    category: string;
}

const FaqList = ({ category }: PropsType) => {
    const { data: faqListData } = useFaqListQuery(category);

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
