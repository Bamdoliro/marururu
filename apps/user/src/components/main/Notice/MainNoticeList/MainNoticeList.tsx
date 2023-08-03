import MainNoticeItem from './MainNoticeItem/MainNoticeItem';
import { useNoticeListQuery } from '@/services/notice/queries';
import styled from 'styled-components';

const MainNoticeList = () => {
    const { data: mainNoticeListData } = useNoticeListQuery();

    if (!mainNoticeListData) return null;

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
