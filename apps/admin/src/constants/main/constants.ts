import { FormType } from '@/types/main/client';

export const FORM_TYPE: Record<FormType, string> = {
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
} as const;
