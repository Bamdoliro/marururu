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
            <Row gap={48}>
                <Text fontType="p2" width={80}>
                    제출서류
                </Text>
                <Text fontType="p2" width={80}>
                    1차 결과
                </Text>
                <Text fontType="p2" width={80}>
                    최종 점수
                </Text>
                <Text fontType="p2" width={80}>
                    2차 결과
                </Text>
            </Row>
        </TableHeader>
    );
};

export default FormListHeader;
