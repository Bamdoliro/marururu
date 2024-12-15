import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text, Button } from '@maru/ui';
import { handleFileDownload, handleViewNow } from './RegistrationTableItem.hook';

interface Props {
  id: number;
  examinationNumber: number;
  name: string;
  admissionAndPledgeUrl: string;
}

const RegistrationTableItem = ({
  id,
  examinationNumber,
  name,
  admissionAndPledgeUrl,
}: Props) => {
  return (
    <TableItem key={id}>
      <Row gap={48}>
        <Text fontType="p2" width={30}>
          {id}
        </Text>
        <Text fontType="p2" width={50}>
          {examinationNumber}
        </Text>
        <Text fontType="p2" width={50}>
          {name}
        </Text>
      </Row>
      <Row gap={16}>
        <Button
          styleType="SECONDARY"
          size="SMALL"
          onClick={() => handleViewNow(admissionAndPledgeUrl)}
        >
          파일 미리보기
        </Button>
        <Button size="SMALL" onClick={() => handleFileDownload(admissionAndPledgeUrl)}>
          파일 다운로드
        </Button>
      </Row>
    </TableItem>
  );
};

export default RegistrationTableItem;
