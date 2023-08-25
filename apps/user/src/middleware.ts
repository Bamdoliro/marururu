import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const 제출_시작_날짜 = new Date('2023-06-25T18:10:20+09:00');
const 제출_마감_날짜 = new Date('2023-06-30T17:00:00+09:00');

export const middleware = (request: NextRequest) => {
    const now = new Date();

    if (now.getTime() < 제출_시작_날짜.getTime() || now.getTime() > 제출_마감_날짜.getTime()) {
        const prefixes = ['/result/first', '/result/final'];
        if (prefixes.some((prefix) => request.nextUrl.pathname.startsWith(prefix))) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
};
