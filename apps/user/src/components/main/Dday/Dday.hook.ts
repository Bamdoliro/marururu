import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInterval } from '@maru/hooks';
import {
    일차_합격_발표,
    최종_합격_발표,
    제출_마감_날짜,
    제출_시작_날짜,
} from '@/constants/submitTime';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import type { ButtonOptionType } from '@maru/ui';

dayjs.extend(isBetween);
dayjs.extend(utc);

const useDday = () => {
    const router = useRouter();

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
    const timeDiff = dayjs.utc(currentTime.diff(dayjs())).format('HH:mm:ss');
    const buttonOption: ButtonOptionType =
        isSubmitPeriod || (-2 < remainDays && remainDays <= 0) ? 'PRIMARY' : 'DISABLED';

    const handleMovePageButtonClick = isSubmitPeriod
        ? () => router.push('/form')
        : -2 < remainDays && remainDays <= 0
        ? () => console.log('결과 확인하기 페이지 이동')
        : undefined;

    const buttonText = dayjs().isBefore(제출_마감_날짜) ? '원서 접수하기' : '결과 확인하기';

    const status = new Map([
        [제출_시작_날짜, '원서 접수 시작까지'],
        [최종_합격_발표, '1차 합격자 발표'],
        [일차_합격_발표, '최종합격자 발표'],
    ]);

    return {
        isSubmitPeriod,
        status,
        currentTime,
        remainDays,
        timeDiff,
        buttonOption,
        handleMovePageButtonClick,
        buttonText,
    };
};

export default useDday;
