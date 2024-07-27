import { FORM_TYPE } from '@/constants/main/constants';
import { useFormDetailQuery } from '@/services/form/queries';
import { IconBadge, IconCall, IconPerson, IconSchool } from '@maru/icon';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  id: number;
}

const Profile = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  return (
    <StyledProfile>
      <ProfileImageBox>
        {formDetailData ? (
          <ProfileImage
            src={formDetailData.applicant.identificationPictureUri}
            alt="profile-image"
            width={280}
            height={280}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : null}
      </ProfileImageBox>
      <Column gap={16}>
        <Text fontType="H2" color={color.gray900}>
          {formDetailData?.applicant.name}
        </Text>
        <Column gap={8}>
          <Row gap={10}>
            <IconBadge width={24} height={24} />
            <Text fontType="p2" color={color.gray900}>
              {formDetailData?.examinationNumber}
            </Text>
          </Row>
          <Row gap={10}>
            <IconPerson width={24} height={24} />
            <Text fontType="p2" color={color.gray900}>
              {formDetailData?.type ? FORM_TYPE[formDetailData.type] : null}
            </Text>
          </Row>
          {formDetailData?.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Row gap={10}>
              <IconSchool width={24} height={24} />
              <Text fontType="p2" color={color.gray900}>
                {formDetailData?.education.schoolName}
              </Text>
            </Row>
          )}
          <Row gap={10}>
            <IconCall width={24} height={24} />
            <Text fontType="p2" color={color.gray900}>
              {formDetailData?.applicant.phoneNumber}
            </Text>
          </Row>
        </Column>
      </Column>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 8px;
  width: 280px;
`;

const ProfileImageBox = styled.div`
  width: 280px;
  height: 280px;
`;

const ProfileImage = styled(Image)`
  border-radius: 999px;
`;
