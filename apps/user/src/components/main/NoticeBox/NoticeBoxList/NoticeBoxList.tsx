import { useNoticeListQuery } from '@/services/notice/queries';
import styled from 'styled-components';
import MainNoticeItem from './NoticeBoxItem/NoticeBoxItem';

const NoticeBoxList = () => {
    const { data: mainNoticeListData } = useNoticeListQuery();

    return mainNoticeListData ? (
        <StyledNoticeBoxList>
            {mainNoticeListData.slice(0, 3).map(({ id, title }, index) => (
                <MainNoticeItem key={`main-notice ${index}`} id={id} title={title} />
            ))}
        </StyledNoticeBoxList>
    ) : null;
};

export default NoticeBoxList;

const StyledNoticeBoxList = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
