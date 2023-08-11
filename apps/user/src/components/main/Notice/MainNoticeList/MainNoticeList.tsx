import { useNoticeListQuery } from '@/services/notice/queries';
import styled from 'styled-components';
import MainNoticeItem from './MainNoticeItem/MainNoticeItem';

const MainNoticeList = () => {
    const { data: mainNoticeListData } = useNoticeListQuery();

    if (!mainNoticeListData) return null;

    return (
        <StyledMainNoticeList>
            {mainNoticeListData.splice(0, 3).map(({ id, title }, index) => (
                <MainNoticeItem key={`main-notice ${index}`} id={id} title={title} />
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
