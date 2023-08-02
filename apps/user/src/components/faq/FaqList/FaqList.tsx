import { flex } from '@maru/utils';
import FaqItem from './FaqItem/FaqItem';
import { FaqList } from '@/types/faq';
import styled from 'styled-components';

interface PropsType {
    faqList: FaqList[];
}

const FaqList = ({ faqList }: PropsType) => {
    return (
        <StyledFaqList>
            {faqList.map((item) => (
                <FaqItem title={item.title} content={item.content} />
            ))}
        </StyledFaqList>
    );
};

export default FaqList;

const StyledFaqList = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
`;
