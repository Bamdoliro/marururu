import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';

export const useSchoolRecruitDate = () => {
  const applicationStart = 제출_시작_날짜.format('YYYY년 MM월 DD일 (ddd) HH:mm');
  const applicationEnd = 제출_마감_날짜.format('YYYY년 MM월 DD일 (ddd) HH:mm');
  return {
    applicationStart,
    applicationEnd,
  };
};
