import { NoticeList } from '@/types/notice';
import styled from 'styled-components';
import MainNoticeItem from './MainNoticeItem/MainNoticeItem';

interface PropsType {
    mainNoticeList: NoticeList[];
}

const MainNoticeList = ({ mainNoticeList }: PropsType) => {
    return (
        <StyledMainNoticeList>
            {mainNoticeList.splice(0, 3).map((item) => (
                <MainNoticeItem id={item.id} title={item.title} />
            ))}
        </StyledMainNoticeList>
    );
};

export default MainNoticeList;

const StyledMainNoticeList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
