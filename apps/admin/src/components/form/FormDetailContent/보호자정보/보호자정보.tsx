import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import { Column, Row } from '@maru/ui';

interface Props {
    id: number;
}

const 보호자정보 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);

    return (
        <Column gap={24}>
            <Row gap={24}>
                <DataBox label="이름" data={formDetailData?.parent.name ?? ''} />
                <DataBox label="전화번호" data={formDetailData?.parent.phoneNumber ?? ''} />
            </Row>
            <Row gap={24}>
                <DataBox label="보호자 관계" data={formDetailData?.parent.relation ?? ''} />
                <DataBox label="주소" data={formDetailData?.parent.address ?? ''} />
            </Row>
            <Row gap={24}>
                <DataBox label="상세 주소" data={formDetailData?.parent.detailAddress ?? ''} />
                <DataBox label="우편 번호" data={formDetailData?.parent.zoneCode ?? ''} />
            </Row>
        </Column>
    );
};

export default 보호자정보;
