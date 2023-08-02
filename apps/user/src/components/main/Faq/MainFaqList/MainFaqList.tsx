import { FaqList } from '@/types/faq';
import MainFaqItem from './MainFaqItem/MainFaqItem';
import styled from 'styled-components';

interface PropsType {
    mainFaqList: FaqList[];
}

const MainFaqList = ({ mainFaqList }: PropsType) => {
    return (
        <StyledMainFaqList>
            {mainFaqList.map((item) => (
                <MainFaqItem title={item.title} />
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
