import { ROUTES } from '@/constants/common/constant';
import {
  일차_합격_발표,
  제출_마감_날짜,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import { useInterval } from '@maru/hooks';
import type { ButtonOption } from '@maru/ui';
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
    : dayjs().isBefore(일차_합격_발표.clone().add(2, 'days'))
    ? 일차_합격_발표
    : 최종_합격_발표;

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
  const { remainDays, isSubmitPeriod } = useDday();
  const router = useRouter();

  const buttonOption: ButtonOption =
    isSubmitPeriod || (-2 < remainDays && remainDays <= 0) ? 'PRIMARY' : 'DISABLED';

  const handleMovePageButtonClick = () => {
    if (isSubmitPeriod) {
      router.push(ROUTES.FORM);
      return;
    }
    if (-2 < remainDays && remainDays <= 0) {
      console.log('결과 확인하기 페이지 이동');
    }
  };

  const buttonText = dayjs().isBefore(제출_마감_날짜) ? '원서 접수하기' : '결과 확인하기';

  return {
    buttonOption,
    handleMovePageButtonClick,
    buttonText,
  };
};
