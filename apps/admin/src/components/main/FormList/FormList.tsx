import ListHeader from '@/components/common/ListHeader/ListHeader';
import ListItem from '@/components/common/ListItem/ListItem';
import { Column, Row, Text } from '@maru/ui';
import { styled } from 'styled-components';

const FORM_DATA: {
    id: number;
    name: string;
    birthday: string;
    graduationType: 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION';
    school: string;
    status: '최종 제출됨' | '반려됨';
    type:
        | 'REGULAR'
        | 'SPECIAL'
        | 'MEISTER_TALENT'
        | 'SPECIAL_ADMISSION'
        | 'NATIONAL_BASIC_LIVING'
        | 'NEAR_POVERTY'
        | 'NATIONAL_VETERANS'
        | 'ONE_PARENT'
        | 'FROM_NORTH_KOREA'
        | 'MULTICULTURAL'
        | 'TEEN_HOUSEHOLDER'
        | 'MULTI_CHILDREN'
        | 'FARMING_AND_FISHING';
}[] = [
    {
        id: 0,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'EXPECTED',
        school: '비전중학교',
        status: '최종 제출됨',
        type: 'REGULAR',
    },
    {
        id: 1,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'QUALIFICATION_EXAMINATION',
        school: '비전중학교',
        status: '반려됨',
        type: 'REGULAR',
    },
    {
        id: 2,
        name: '김밤돌',
        birthday: '2005-04-15',
        graduationType: 'EXPECTED',
        school: '비전중학교',
        status: '최종 제출됨',
        type: 'MULTICULTURAL',
    },
];

type FormType =
    | 'REGULAR'
    | 'MEISTER_TALENT'
    | 'NATIONAL_BASIC_LIVING'
    | 'NEAR_POVERTY'
    | 'NATIONAL_VETERANS'
    | 'ONE_PARENT'
    | 'FROM_NORTH_KOREA'
    | 'MULTICULTURAL'
    | 'TEEN_HOUSEHOLDER'
    | 'MULTI_CHILDREN'
    | 'FARMING_AND_FISHING'
    | 'SPECIAL_ADMISSION';

const KoreanFormType: { [key in FormType]: string } = {
    REGULAR: '일반',
    MEISTER_TALENT: '마이스터인재',
    NATIONAL_BASIC_LIVING: '국민기초생활수급자',
    NEAR_POVERTY: '차상위계층',
    NATIONAL_VETERANS: '국가보훈대상자 (국가유공자)',
    ONE_PARENT: '한부모가정',
    FROM_NORTH_KOREA: '북한이탈주민',
    MULTICULTURAL: '다문화가정',
    TEEN_HOUSEHOLDER: '소년소녀가장',
    MULTI_CHILDREN: '다자녀가정자녀',
    FARMING_AND_FISHING: '농어촌지역출신자',
    SPECIAL_ADMISSION: '특례입학대상자전형',
};

const FormList = () => {
    return (
        <Column gap={12}>
            <ListHeader>
                <Row gap={48}>
                    <Text fontType="p2" width={60}>
                        접수번호
                    </Text>
                    <Text fontType="p2" width={60}>
                        이름
                    </Text>
                    <Text fontType="p2" width={60}>
                        생년월일
                    </Text>
                    <Text fontType="p2" width={160}>
                        학교
                    </Text>
                    <Text fontType="p2" width={240}>
                        전형
                    </Text>
                </Row>
                <Text fontType="p2" width={80}>
                    상태
                </Text>
            </ListHeader>
            {FORM_DATA.map((item) => (
                <ListItem>
                    <Row gap={48}>
                        <Text fontType="p2" width={60}>
                            {item.id}
                        </Text>
                        <Text fontType="p2" width={60}>
                            {item.name}
                        </Text>
                        <Text fontType="p2" width={60}>
                            {item.birthday.replaceAll('-', '').slice(2)}
                        </Text>
                        <Text fontType="p2" width={160}>
                            {item.graduationType === 'QUALIFICATION_EXAMINATION'
                                ? '검정고시'
                                : item.school}
                        </Text>
                        <Text fontType="p2" width={240}>
                            {KoreanFormType[item.type as FormType]}
                        </Text>
                    </Row>
                    <Text fontType="p2" width={80}>
                        {item.status}
                    </Text>
                </ListItem>
            ))}
        </Column>
    );
};

export default FormList;

const StyledFormList = styled.div``;
