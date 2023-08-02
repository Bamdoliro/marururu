import { NoticeList } from '@/types/notice';
import styled from 'styled-components';
import MainNoticeItem from './MainNoticeItem/MainNoticeItem';

interface PropsType {
    mainNoticeListData: NoticeList[];
}

const MainNoticeList = ({ mainNoticeListData }: PropsType) => {
    return (
        <StyledMainNoticeList>
            {mainNoticeListData.splice(0, 3).map(({ id, title }) => (
                <MainNoticeItem id={id} title={title} />
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
