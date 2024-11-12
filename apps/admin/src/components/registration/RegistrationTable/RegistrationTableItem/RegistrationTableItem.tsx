import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text, Button } from '@maru/ui';
import { handleFileDownload, handleViewNow } from './RegistrationTableItem.hook';

interface Props {
  id: number;
  title: string;
  fileUrl: string;
  fileName: string;
}

const RegistrationTableItem = ({ id, title, fileUrl, fileName }: Props) => {
  return (
    <TableItem key={id}>
      <Row gap={48}>
        <Text fontType="p2" width={50}>
          {id}
        </Text>
        <Text fontType="p2" width={50}>
          {id}
        </Text>
        <Text fontType="p2" width={400}>
          {title}
        </Text>
      </Row>
      <Row gap={16}>
        <Button styleType="SECONDARY" size="SMALL" onClick={() => handleViewNow(fileUrl)}>
          파일 미리보기
        </Button>
        <Button size="SMALL" onClick={() => handleFileDownload(fileUrl, fileName)}>
          파일 다운로드
        </Button>
      </Row>
    </TableItem>
  );
};

export default RegistrationTableItem;
