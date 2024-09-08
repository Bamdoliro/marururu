import type { FormCategory, FormStatus, FormType } from '@/types/form/client';

export const FORM_STATUS_CATEGORY: Record<FormStatus, string> = {
  RECEIVED: '접수',
  FIRST_FAILED: '1차 불합격',
  FAILED: '불합격',
  FINAL_SUBMITTED: '최종 제출',
  SUBMITTED: '제출',
  APPROVED: '승인',
  NO_SHOW: '불참',
  FIRST_PASSED: '1차 합격',
  PASSED: '최종 합격',
  REJECTED: '반려',
} as const;

export const FORM_TYPE_CATEGORY: Record<FormType, string> = {
  REGULAR: '일반전형',
  MEISTER_TALENT: '마이스터인재전형',
  NATIONAL_BASIC_LIVING: '국가기초생활수급권자',
  NATIONAL_VETERANS_EDUCATION: '국가보훈대상자 중 교육지원대상자녀',
  NEAR_POVERTY: '차상위계층',
  NATIONAL_VETERANS: '국가보훈자녀',
  ONE_PARENT: '한부모가정',
  FROM_NORTH_KOREA: '북한이탈주민',
  MULTICULTURAL: '다문화가정',
  TEEN_HOUSEHOLDER: '소년소녀가장',
  MULTI_CHILDREN: '다자녀가정자녀',
  FARMING_AND_FISHING: '농어촌지역출신자',
  SPECIAL_ADMISSION: '특례입학대상자',
} as const;

export const FORM_CATEGORY_CATEGORY: Record<FormCategory, string> = {
  REGULAR: '일반전형',
  SPECIAL: '특별전형',
  SUPERNUMERARY: '정원 외 전형',
  SOCIAL_INTEGRATION: '사회통합전형',
  MEISTER_TALENT: '마이스터인재전형',
  NATIONAL_VETERANS_EDUCATION: '국가보훈대상자 중 교육지원대상자녀',
  SPECIAL_ADMISSION: '특례입학대상자',
  EQUAL_OPPORTUNITY: '기회균등전형',
  SOCIETY_DIVERSITY: '사회다양성전형',
};

export const FORM_SORTING_CATEGORY = {
  ...FORM_STATUS_CATEGORY,
  ...FORM_CATEGORY_CATEGORY,
  'total-score-desc': '최종 점수 높은 순',
  'total-score-asc': '최종 점수 낮은 순',
  'form-id': '접수순',
} as const;

export type FormListSortingType = keyof typeof FORM_SORTING_CATEGORY;
