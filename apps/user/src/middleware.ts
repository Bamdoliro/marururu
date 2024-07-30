import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

dayjs.extend(isBetween);

export const middleware = (request: NextRequest) => {
  const { device } = userAgent(request);
  const url = request.nextUrl.pathname;
  const now = dayjs();
  const 제출_시작_날짜 = dayjs(process.env.NEXT_PUBLIC_SUBMIT_START_DAY);
  const 제출_마감_날짜 = dayjs(process.env.NEXT_PUBLIC_SUBMIT_END_DAY);
  const 입학_등록_기간 = dayjs(process.env.NEXT_PUBLIC_ADMISSION_REGISTRATION_START_DAY);

  const cookies = request.headers.get('cookie');
  const accessToken = cookies
    ?.split('; ')
    .find((row) => row.startsWith('access-token='))
    ?.split('=')[1];

  if ((device.type === 'mobile' || device.type === 'tablet') && url !== '/mobile') {
    return NextResponse.rewrite(new URL('/mobile', request.url));
  }

  if (url === '/form') {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('warning', '로그인이 필요합니다.');
      return NextResponse.redirect(redirectUrl);
    } else if (!now.isBetween(제출_시작_날짜, 제출_마감_날짜, 'minute', '[]')) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set(
        'message',
        '정상적인 경로를 통해 원서를 작성해주세요.'
      );
      return NextResponse.redirect(redirectUrl);
    } else {
      return NextResponse.rewrite(new URL('/form', request.url));
    }
  }

  if (url === '/form-management') {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('warning', '로그인이 필요합니다.');
      return NextResponse.redirect(redirectUrl);
    } else if (!now.isBetween(제출_시작_날짜, 입학_등록_기간, 'minute', '[]')) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('message', '입학 전형 기간이 아닙니다.');
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/mobile',
    '/form',
    '/form-management',
    '/((?!api|_next/static|_next/image|favicon.ico|svg).*)',
  ],
};
