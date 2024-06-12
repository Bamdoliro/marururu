import { useNoticeListQuery } from '@/services/notice/queries';
import { Column } from '@maru/ui';
import NoticeTableHeader from './NoticeTableHeader/NoticeTableHeader';
import NoticeTableItem from './NoticeTableItem/NoticeTableItem';

const NoticeTable = () => {
  const { data: noticeList } = useNoticeListQuery();

  return (
    <Column gap={12}>
      <NoticeTableHeader />
      {noticeList
        ? noticeList
            .sort((a, b) => a.id - b.id)
            .map(({ id, title, createdAt }) => (
              <NoticeTableItem id={id} title={title} createdAt={createdAt} />
            ))
        : null}
    </Column>
  );
};

export default NoticeTable;
