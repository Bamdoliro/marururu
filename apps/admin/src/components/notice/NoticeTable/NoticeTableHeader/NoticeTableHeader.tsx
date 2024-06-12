import TableHeader from '@/components/common/TableHeader/TableHeader';
import { Row, Text } from '@maru/ui';

const NoticeTableHeader = () => {
  return (
    <TableHeader>
      <Row gap={48}>
        <Text fontType="p2" width={50}>
          번호
        </Text>
        <Text fontType="p2" width={540}>
          제목
        </Text>
      </Row>
      <Text fontType="p2" width={100}>
        게시일
      </Text>
    </TableHeader>
  );
};

export default NoticeTableHeader;
