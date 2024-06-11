import type { Category } from '@/types/message/client';

export const MESSAGE_CATEGORY: Record<Category, string> = {
  APPROVED: '원서 승인 완료자',
  REJECTED: '원서 반려자',
  MEISTER_TALENT: '마이스터인재전형',
  FIRST_PASSED: '1차 합격자',
  FINAL_SUBMITTED: '최종 합격자',
} as const;
