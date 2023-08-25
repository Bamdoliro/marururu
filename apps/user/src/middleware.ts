import dayjs from 'dayjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { 제출_마감_날짜, 제출_시작_날짜 } from './constants/form/constant';

export const middleware = (request: NextRequest) => {
    if (dayjs().isBefore(제출_시작_날짜) || dayjs().isAfter(제출_마감_날짜)) {
        if (
            request.nextUrl.pathname.startsWith('/result/first') ||
            request.nextUrl.pathname.startsWith('/result/final')
        ) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
};
