import {
  일차_합격_발표,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import { formatDay } from '@/utils';
import dayjs from 'dayjs';
import { useDday } from '../ApplicationSubmittionBox.hooks';

export const useRemainDate = () => {
  const { currentTime, remainDays } = useDday();
  const statusMap = new Map([
    [제출_시작_날짜, '원서 접수 시작까지'],
    [최종_합격_발표, '최종합격자 발표'],
    [일차_합격_발표, '1차 합격자 발표'],
  ]);

  const timeDiff = dayjs.utc(currentTime.diff(dayjs())).format('HH:mm:ss');

  const status = statusMap.get(currentTime);
  const remainTime = remainDays >= 1 || remainDays < 0 ? formatDay(remainDays) : timeDiff;
  const targetDate = currentTime.format('YYYY년 MM월 DD일 (ddd) HH:mm');

  return {
    status,
    remainTime,
    targetDate,
  };
};
