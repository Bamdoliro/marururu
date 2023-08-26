import TableHeader from '@/components/common/TableHeader/TableHeader';
import { Row, Text } from '@maru/ui';

const FormListHeader = () => {
    return (
        <TableHeader>
            <Row gap={48}>
                <Text fontType="p2" width={60}>
                    접수번호
                </Text>
                <Text fontType="p2" width={60}>
                    이름
                </Text>
                <Text fontType="p2" width={60}>
                    생년월일
                </Text>
                <Text fontType="p2" width={160}>
                    학교
                </Text>
                <Text fontType="p2" width={240}>
                    전형
                </Text>
            </Row>
            <Text fontType="p2" width={80}>
                상태
            </Text>
        </TableHeader>
    );
};

export default FormListHeader;
