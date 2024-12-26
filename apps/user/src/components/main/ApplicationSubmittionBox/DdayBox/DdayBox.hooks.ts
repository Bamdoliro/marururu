import {
  이차_전형_끝,
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간,
  입학_등록_기간_마감,
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
    [이차_전형_시작, '2차 전형 시작까지'],
    [최종_합격_발표, '최종 합격자 발표'],
    [일차_합격_발표, '1차 합격자 발표'],
    [입학_등록_기간, '입학 등록 기간'],
    [입학_등록_기간_마감, '입학 전형 종료'],
  ]);

  const isSecondRoundDay = dayjs().isBetween(이차_전형_시작, 이차_전형_끝);

  const timeDiff = dayjs.utc(currentTime.diff(dayjs())).format('HH:mm:ss');

  const isAfterRegistrationClosed = currentTime.isAfter(입학_등록_기간_마감);
  const passedDays = Math.abs(currentTime.diff(입학_등록_기간_마감, 'day'));

  const status = isAfterRegistrationClosed
    ? '입학 전형 종료'
    : statusMap.get(currentTime);

  const remainTime = isAfterRegistrationClosed
    ? `D+${passedDays}`
    : remainDays >= 1 || remainDays < 0
    ? formatDay(remainDays)
    : timeDiff;

  const targetDate = currentTime.format('YYYY년 MM월 DD일 (ddd) HH:mm');

  return {
    status,
    statusMap,
    remainTime,
    targetDate,
    isSecondRoundDay,
    isAfterRegistrationClosed,
  };
};
