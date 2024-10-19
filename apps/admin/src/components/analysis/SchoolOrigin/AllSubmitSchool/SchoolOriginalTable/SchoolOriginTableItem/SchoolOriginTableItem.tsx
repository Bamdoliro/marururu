import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text } from '@maru/ui';

interface Props {
  id: number;
  applicantName: string;
  schoolName: string;
  schoolAddress: string;
}

const SchoolOriginTableItem: React.FC<Props> = ({
  id,
  applicantName,
  schoolName,
  schoolAddress,
}) => {
  return (
    <>
      <TableItem>
        <Row gap={48}>
          <Text fontType="p2" width={50} ellipsis>
            {id}
          </Text>
          <Text fontType="p2" width={400} ellipsis>
            {applicantName}
          </Text>
        </Row>
        <Row gap={184}>
          <Text fontType="p2" width={120} ellipsis>
            {schoolName}
          </Text>
          <Text fontType="p2" width={400} ellipsis>
            {schoolAddress}
          </Text>
        </Row>
      </TableItem>
    </>
  );
};

export default SchoolOriginTableItem;
