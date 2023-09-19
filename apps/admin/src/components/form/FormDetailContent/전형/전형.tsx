import DataBox from '@/components/common/DataBox/DataBox';
import { FORM_TYPE } from '@/constants/main/constants';
import { useFormDetailQuery } from '@/services/form/queries';

interface Props {
    id: number;
}

const 전형 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);
    return <DataBox label="전형" data={formDetailData ? FORM_TYPE[formDetailData.type] : ''} />;
};

export default 전형;
