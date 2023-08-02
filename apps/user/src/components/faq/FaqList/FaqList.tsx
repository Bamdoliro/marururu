import { flex } from '@maru/utils';
import FaqItem from './FaqItem/FaqItem';
import { FaqList } from '@/types/faq';
import styled from 'styled-components';

interface PropsType {
    faqListData: FaqList[];
}

const FaqList = ({ faqListData }: PropsType) => {
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
