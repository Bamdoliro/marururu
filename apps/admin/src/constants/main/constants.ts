import type { FormType } from '@/types/form/client';

export const FORM_TYPE: Record<FormType, string> = {
  REGULAR: '일반전형',
  MEISTER_TALENT: '마이스터인재전형',
  NATIONAL_BASIC_LIVING: '국가기초생활수급권자',
  NATIONAL_VETERANS_EDUCATION: '국가보훈대상자 중 교육지원대상자녀',
  NEAR_POVERTY: '차상위계층',
  NATIONAL_VETERANS: '국가보훈자녀',
  ONE_PARENT: '한부모가정',
  FROM_NORTH_KOREA: '북한이탈주민',
  MULTICULTURAL: '다문화가족 자녀',
  TEEN_HOUSEHOLDER: '소년소녀가장',
  MULTI_CHILDREN: '다자녀가정자녀',
  FARMING_AND_FISHING: '농어촌지역출신자',
  SPECIAL_ADMISSION: '특례입학대상자',
} as const;
