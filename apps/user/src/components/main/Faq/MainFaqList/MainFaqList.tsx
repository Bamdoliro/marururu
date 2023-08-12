import { Loading } from '@/components/common';
import { useFaqListQuery } from '@/services/faq/queries';
import styled from 'styled-components';
import MainFaqItem from './MainFaqItem/MainFaqItem';

const MainFaqList = () => {
    const { data: mainFaqListData } = useFaqListQuery('TOP_QUESTION');

    return mainFaqListData ? (
        <StyledMainFaqList>
            {mainFaqListData.slice(0, 3).map(({ title }, index) => (
                <MainFaqItem key={`main-faq ${index}`} title={title} />
            ))}
        </StyledMainFaqList>
    ) : null;
};

export default MainFaqList;

const StyledMainFaqList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
