import type { Category } from '@/types/message/client';

export const MESSAGE_CATEGORY: Record<Category, string> = {
  APPROVED: '원서 승인 완료자',
  REJECTED: '원서 반려자',
  RECEIVED: '접수 완료',
  MEISTER_TALENT: '마이스터인재전형',
  TRUE_REGULAR: '마이스터 -> 일반',
  FALSE_REGULAR: '마이스터 -> 일반 제외',
  FIRST_PASSED: '전체 1차 합격자',
  FINAL_SUBMITTED: '최종 합격자',
} as const;
