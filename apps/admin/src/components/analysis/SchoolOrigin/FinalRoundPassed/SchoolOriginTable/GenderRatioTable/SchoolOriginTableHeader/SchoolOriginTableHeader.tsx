import TableHeader from '@/components/common/TableHeader/TableHeader';
import { Row, Text } from '@maru/ui';

const SchoolOriginTableHeader = () => {
  return (
    <TableHeader>
      <Row gap={48}>
        <Text fontType="p2" width={50}>
          번호
        </Text>
        <Text fontType="p2" width={400}>
          이름
        </Text>
      </Row>
      <Row gap={184}>
        <Text fontType="p2" width={120}>
          출신학교
        </Text>
        <Text fontType="p2" width={400}>
          학교 위치
        </Text>
      </Row>
    </TableHeader>
  );
};

export default SchoolOriginTableHeader;
