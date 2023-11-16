import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import { Column, Row } from '@maru/ui';

interface Props {
  id: number;
}

const 출신학교및학력 = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  console.log(formDetailData?.education);
  return (
    <Column gap={24}>
      <Row gap={24}>
        <DataBox label="졸업구분" data={formDetailData?.education.graduationType ?? ''} />
        <DataBox label="출신학교명" data={formDetailData?.education.schoolName ?? ''} />
      </Row>
      <Row gap={24}>
        <DataBox
          label="졸업년도, 합격년도"
          data={formDetailData?.education.graduationYear ?? ''}
        />
        <DataBox
          label="학교 지역"
          data={formDetailData?.education.schoolLocation ?? ''}
        />
      </Row>
      <Row gap={24}>
        <DataBox label="표준학교코드" data={formDetailData?.education.schoolCode ?? ''} />
        <DataBox
          label="학교 연락처"
          data={formDetailData?.education.teacherPhoneNumber ?? ''}
        />
      </Row>
      <Row gap={24}>
        <DataBox
          label="작성교사 이름"
          data={formDetailData?.education.teacherName ?? ''}
        />
        <DataBox
          label="작성교사 연락처"
          data={formDetailData?.education.teacherMobilePhoneNumber ?? ''}
        />
      </Row>
    </Column>
  );
};

export default 출신학교및학력;
