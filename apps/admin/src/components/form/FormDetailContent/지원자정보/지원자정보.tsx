import DataBox from '@/components/common/DataBox/DataBox';
import { useFormDetailQuery } from '@/services/form/queries';
import { color } from '@maru/theme';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
    id: number;
}

const 지원자정보 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);

    const birthday = formDetailData?.applicant.birthday;

    const formatBirthday = (birthday?: string) => {
        if (!birthday) return '';
        const splitBirthday = birthday.split('-');
        splitBirthday.splice(1, 0, '년 ');
        splitBirthday.splice(3, 0, '월 ');
        splitBirthday.push('일');
        return splitBirthday.join('');
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
                <DataBox label="이름" data={formDetailData?.applicant.name ?? ''} />
                <DataBox
                    label="생년월일"
                    data={formatBirthday(formDetailData?.applicant.birthday)}
                />
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
