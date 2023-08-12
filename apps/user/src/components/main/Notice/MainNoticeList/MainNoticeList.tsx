import { useNoticeListQuery } from '@/services/notice/queries';
import MainNoticeItem from './MainNoticeItem/MainNoticeItem';
import styled from 'styled-components';

const MainNoticeList = () => {
    const { data: mainNoticeListData } = useNoticeListQuery();

    return mainNoticeListData ? (
        <StyledMainNoticeList>
            {mainNoticeListData.slice(0, 3).map(({ id, title }, index) => (
                <MainNoticeItem key={`main-notice ${index}`} id={id} title={title} />
            ))}
        </StyledMainNoticeList>
    ) : null;
};

export default MainNoticeList;

const StyledMainNoticeList = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
