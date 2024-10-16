import type { Category } from '@/types/message/client';

export const MESSAGE_CATEGORY: Record<Category, string> = {
  SUBMITTED: '원서 초안 제출자',
  APPROVED: '원서 확인 중인 지원자',
  REJECTED: '원서 반려자',
  RECEIVED: '원서 승인 완료자',
  MEISTER_TALENT: '마이스터인재전형',
  TRUE_REGULAR: '마이스터 -> 일반',
  FALSE_REGULAR: '마이스터 -> 일반 제외',
  FIRST_PASSED: '전체 1차 합격자',
  FINAL_SUBMITTED: '최종 합격자',
} as const;
