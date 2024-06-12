import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import { Column } from '@maru/ui';

interface Props {
  id: number;
}

const 자기소개서 = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  return (
    <Column gap={24}>
      <DataBox
        label="자기소개서"
        data={formDetailData?.document.coverLetter ?? ''}
        lengthType="LONG"
      />
      <DataBox
        label="학업계획서"
        data={formDetailData?.document.statementOfPurpose ?? ''}
        lengthType="LONG"
      />
    </Column>
  );
};

export default 자기소개서;
