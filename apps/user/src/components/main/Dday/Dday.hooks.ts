import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInterval } from '@maru/hooks';
import {
    일차_합격_발표,
    최종_합격_발표,
    제출_마감_날짜,
    제출_시작_날짜,
} from '@/constants/form/constant';
import type { ButtonOption } from '@maru/ui';
import { formatDay } from '@/utils';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(isBetween);
dayjs.extend(utc);

export const useDday = () => {
    const currentTime = dayjs().isBefore(제출_시작_날짜)
        ? 제출_시작_날짜
        : dayjs().isBefore(제출_마감_날짜)
        ? 제출_마감_날짜
        : dayjs().isBefore(최종_합격_발표.clone().add(2, 'days'))
        ? 최종_합격_발표
        : 일차_합격_발표;

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

export const useSchoolRecruitDate = () => {
    const submitStart = 제출_시작_날짜.format('YYYY년 MM월 DD일');
    const submitEnd = 제출_마감_날짜.format('YYYY년 MM월 DD일');
    return {
        submitStart,
        submitEnd,
    };
};

export const useRemainDate = () => {
    const { currentTime, remainDays } = useDday();
    const statusMap = new Map([
        [제출_시작_날짜, '원서 접수 시작까지'],
        [최종_합격_발표, '1차 합격자 발표'],
        [일차_합격_발표, '최종합격자 발표'],
    ]);

    const timeDiff = dayjs.utc(currentTime.diff(dayjs())).format('HH:mm:ss');

    const status = statusMap.get(currentTime);
    const remainTime = remainDays >= 1 || remainDays < 0 ? formatDay(remainDays) : timeDiff;
    const targetDate = currentTime.format('YYYY년 MM월 DD일');

    return {
        status,
        remainTime,
        targetDate,
    };
};

export const useButtonStatus = () => {
    const { remainDays, isSubmitPeriod } = useDday();
    const router = useRouter();

    const buttonOption: ButtonOption =
        isSubmitPeriod || (-2 < remainDays && remainDays <= 0) ? 'PRIMARY' : 'DISABLED';
    const handleMovePageButtonClick = isSubmitPeriod
        ? () => router.push('/form')
        : -2 < remainDays && remainDays <= 0
        ? () => console.log('결과 확인하기 페이지 이동')
        : undefined;
    const buttonText = dayjs().isBefore(제출_마감_날짜) ? '원서 접수하기' : '결과 확인하기';

    return {
        buttonOption,
        handleMovePageButtonClick,
        buttonText,
    };
};
