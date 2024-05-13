import { useFormDetailQuery } from '@/services/form/queries';
import DataBox from '@/components/common/DataBox/DataBox';
import { FORM_TYPE } from '@/constants/main/constants';

interface Props {
  id: number;
}

const NumberOfApplicants = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  return (
    <DataBox
      label="지원자 수 (경쟁률)"
      data={formDetailData ? FORM_TYPE[formDetailData.type] : ''}
    />
  );
};

export default NumberOfApplicants;
