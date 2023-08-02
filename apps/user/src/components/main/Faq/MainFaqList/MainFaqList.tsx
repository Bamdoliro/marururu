import { FaqList } from '@/types/faq';
import MainFaqItem from './MainFaqItem/MainFaqItem';
import styled from 'styled-components';

interface PropsType {
    mainFaqListData: FaqList[];
}

const MainFaqList = ({ mainFaqListData }: PropsType) => {
    return (
        <StyledMainFaqList>
            {mainFaqListData.splice(0, 3).map(({ title }) => (
                <MainFaqItem title={title} />
            ))}
        </StyledMainFaqList>
    );
};

export default MainFaqList;

const StyledMainFaqList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
