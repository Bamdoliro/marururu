import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import type { UserInfo } from '@/types/form/client';
import { Column, Row } from '@maru/ui';

const GENDER: Record<UserInfo['gender'], string> = {
  MALE: '남자',
  FEMALE: '여자',
} as const;

interface Props {
  id: number;
}

const 지원자정보 = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  const formatBirthday = (birthday?: string) => {
    if (!birthday) return '';
    const [year, month, day] = birthday.split('-');

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <Column gap={24}>
      <Row gap={24}>
        <DataBox label="이름" data={formDetailData?.applicant.name ?? ''} />
        <DataBox
          label="생년월일"
          data={formatBirthday(formDetailData?.applicant.birthday)}
        />
      </Row>
      <Row gap={24}>
        <DataBox
          label="성별"
          data={formDetailData ? GENDER[formDetailData?.applicant.gender] : ''}
        />
        <DataBox label="전화번호" data={formDetailData?.applicant.phoneNumber ?? ''} />
      </Row>
    </Column>
  );
};

export default 지원자정보;
