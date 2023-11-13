import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import type { UserInfo } from '@/types/form/client';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import styled from 'styled-components';

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
      <ProfileImageDataBox>
        <Text fontType="H4">증명사진</Text>
        <ProfileImageBox>
          {formDetailData ? (
            <Image
              src={formDetailData.applicant.identificationPictureUri ?? ''}
              alt="profile-image"
              width={225}
              height={300}
            />
          ) : null}
        </ProfileImageBox>
      </ProfileImageDataBox>
    </Column>
  );
};

export default 지원자정보;

const ProfileImageDataBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 16px;
  width: 604px;
  height: 392px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid ${color.gray200};
  background: ${color.white};
`;

const ProfileImageBox = styled.div`
  width: 225px;
  height: 300px;
`;
