import TableItem from '@/components/common/TableItem/TableItem';
import { Row, Text } from '@maru/ui';

interface Props {
  id: number;
  title: string;
  schoolOrigin: string;
  schoolLocation: string;
}

const SchoolOriginTableItem = ({ id, title, schoolOrigin, schoolLocation }: Props) => {
  return (
    <>
      <TableItem>
        <Row gap={48}>
          <Text fontType="p2" width={50} ellipsis>
            {id}
          </Text>
          <Text fontType="p2" width={400} ellipsis>
            {title}
          </Text>
        </Row>
        <Row gap={184}>
          <Text fontType="p2" width={120} ellipsis>
            {schoolOrigin}
          </Text>
          <Text fontType="p2" width={400} ellipsis>
            {schoolLocation}
          </Text>
        </Row>
      </TableItem>
    </>
  );
};

export default SchoolOriginTableItem;
