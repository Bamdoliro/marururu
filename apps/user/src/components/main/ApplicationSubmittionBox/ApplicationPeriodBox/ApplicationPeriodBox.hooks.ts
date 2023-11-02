import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';

export const useSchoolRecruitDate = () => {
  const submitStart = 제출_시작_날짜.format('YYYY년 MM월 DD일 (ddd) HH:mm');
  const submitEnd = 제출_마감_날짜.format('YYYY년 MM월 DD일 (ddd) HH:mm');
  return {
    submitStart,
    submitEnd,
  };
};
