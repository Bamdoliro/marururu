import type { Category } from '@/types/message/client';

export const MESSAGE_CATEGORY: Record<Category, string> = {
  RECEIVED: '원서 승인 완료자',
  REJECTED: '원서 반려자',
  MEISTER: '마이스터인재전형',
  UNMEISTER: '마이스터 제외 합격자',
  FIRST_PASSED: '1차 합격자',
  PASSED: '최종 합격자',
} as const;
