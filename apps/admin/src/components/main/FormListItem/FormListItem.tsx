import TableItem from '@/components/common/TableItem/TableItem';
import { FORM_TYPE } from '@/constants/main/constants';
import { FormStatus, FormType, GraduationType } from '@/types/main/client';
import { Row, Text } from '@maru/ui';

interface Props {
    id: number;
    name: string;
    birthday: string;
    graduationType: GraduationType;
    school: string;
    status: FormStatus;
    type: FormType;
}

const FormListItem = ({ id, name, birthday, graduationType, school, type, status }: Props) => {
    return (
        <TableItem>
            <Row gap={48}>
                <Text fontType="p2" width={60}>
                    {id}
                </Text>
                <Text fontType="p2" width={60}>
                    {name}
                </Text>
                <Text fontType="p2" width={60}>
                    {birthday.replaceAll('-', '').slice(2)}
                </Text>
                <Text fontType="p2" width={160}>
                    {graduationType === 'QUALIFICATION_EXAMINATION' ? '검정고시' : school}
                </Text>
                <Text fontType="p2" width={240}>
                    {FORM_TYPE[type as FormType]}
                </Text>
            </Row>
            <Text fontType="p2" width={80}>
                {status}
            </Text>
        </TableItem>
    );
};

export default FormListItem;
