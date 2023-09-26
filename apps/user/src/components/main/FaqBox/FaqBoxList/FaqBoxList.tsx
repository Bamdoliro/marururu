import { useFaqListQuery } from '@/services/faq/queries';
import styled from 'styled-components';
import MainFaqItem from './FaqBoxItem/FaqBoxItem';

const FaqBoxList = () => {
    const { data: mainFaqListData } = useFaqListQuery('TOP_QUESTION');

    return mainFaqListData ? (
        <StyledFaqBoxList>
            {mainFaqListData.slice(0, 3).map(({ title }, index) => (
                <MainFaqItem key={`main-faq ${index}`} title={title} />
            ))}
        </StyledFaqBoxList>
    ) : null;
};

export default FaqBoxList;

const StyledFaqBoxList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
