import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import { Column, Row } from '@maru/ui';

interface Props {
  id: number;
}

const getGraduationTypeKorean = (graduationType: string | undefined): string => {
  const types = {
    EXPECTED: '졸업예정',
    GRADUATED: '졸업',
    QUALIFICATION_EXAMINATION: '검정고시',
  };

  return graduationType ? types[graduationType as keyof typeof types] ?? '' : '';
};

const 출신학교및학력 = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  return (
    <Column gap={24}>
      <Row gap={24}>
        <DataBox
          label="졸업구분"
          data={getGraduationTypeKorean(formDetailData?.education.graduationType)}
        />
        <DataBox
          label="졸업년도, 합격년도"
          data={formDetailData?.education.graduationYear ?? ''}
        />
      </Row>
      <Row gap={24}>
        <DataBox label="출신학교명" data={formDetailData?.education.schoolName ?? ''} />
        <DataBox
          label="학교 도로명 주소"
          data={formDetailData?.education.schoolAddress ?? ''}
        />
      </Row>
      <Row gap={24}>
        <DataBox
          label="학교 지역"
          data={formDetailData?.education.schoolLocation ?? ''}
        />
        <DataBox label="표준학교코드" data={formDetailData?.education.schoolCode ?? ''} />
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
      <Row gap={24}>
        <DataBox
          label="학교 연락처"
          data={formDetailData?.education.teacherPhoneNumber ?? ''}
        />
      </Row>
    </Column>
  );
};

export default 출신학교및학력;
