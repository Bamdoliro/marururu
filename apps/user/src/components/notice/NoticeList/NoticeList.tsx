import { useNoticeListQuery } from '@/services/notice/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import NoticeItem from './NoticeItem/NoticeItem';

const NoticeList = () => {
  const { data: noticeListData } = useNoticeListQuery();

  const sortedNoticeListData = noticeListData
    ?.slice()
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return sortedNoticeListData ? (
    <StyledNoticeList>
      {sortedNoticeListData.map(({ id, title, updatedAt }) => (
        <NoticeItem key={id} id={id} title={title} updatedAt={updatedAt} />
      ))}
    </StyledNoticeList>
  ) : null;
};

export default NoticeList;

const StyledNoticeList = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 20px;
  width: 100%;
`;
