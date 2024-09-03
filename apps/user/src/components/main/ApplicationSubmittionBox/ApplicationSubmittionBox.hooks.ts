import { ROUTES } from '@/constants/common/constant';
import {
  일차_합격_발표,
  입학_등록_기간,
  제출_마감_날짜,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import { useInterval } from '@maru/hooks';
import type { ButtonStyleType } from '@maru/ui';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.locale('ko');

export const useDday = () => {
  const currentTime = dayjs().isBefore(제출_시작_날짜)
    ? 제출_시작_날짜
    : dayjs().isBefore(제출_마감_날짜)
    ? 제출_마감_날짜
    : dayjs().isBefore(일차_합격_발표.add(2, 'day'))
    ? 일차_합격_발표
    : dayjs().isBefore(최종_합격_발표)
    ? 최종_합격_발표
    : 입학_등록_기간;

  const [remainDays, setRemainDays] = useState(currentTime.diff(dayjs(), 'days', true));

  useInterval(() => {
    setRemainDays(currentTime.diff(dayjs(), 'days', true));
  }, 1000);

  const isSubmitPeriod = dayjs().isBetween(제출_시작_날짜, 제출_마감_날짜);

  return {
    currentTime,
    remainDays,
    isSubmitPeriod,
  };
};

export const useButtonStatus = () => {
  const { currentTime, remainDays /*, isSubmitPeriod*/ } = useDday();
  const router = useRouter();

  const isPeriodOfViewing = -2 < remainDays && remainDays <= 0;

  // const buttonStyleType: ButtonStyleType =
  //   isSubmitPeriod || isPeriodOfViewing ? 'PRIMARY' : 'DISABLED';

  const buttonStyleType: ButtonStyleType = 'DISABLED';

  const handleMoveFormPage = () => {
    router.push(ROUTES.FORM);
  };
  const handleMoveResultPage = () => {
    if (isPeriodOfViewing) {
      if (currentTime === 일차_합격_발표) {
        router.push(ROUTES.FIRST_RESULT);
      } else if (currentTime === 최종_합격_발표) {
        router.push(ROUTES.FINAL_RESULT);
      }
    }
  };

  const buttonText = dayjs().isBefore(제출_마감_날짜) ? '원서 접수하기' : '결과 확인하기';

  return {
    buttonStyleType,
    handleMoveFormPage,
    handleMoveResultPage,
    buttonText,
  };
};
