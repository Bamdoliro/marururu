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
  const 일차_합격_발표 = dayjs(process.env.NEXT_PUBLIC_FIRST_RESULT_DAY);
  const 이차_전형_시작 = dayjs(process.env.NEXT_PUBLIC_SECOND_EXAM_START_DAY);
  const 최종_합격_발표 = dayjs(process.env.NEXT_PUBLIC_FINAL_RESULT_DAY);
  const 입학_등록_기간 = dayjs(process.env.NEXT_PUBLIC_ADMISSION_REGISTRATION_START_DAY);

  const cookies = request.headers.get('cookie');
  const accessToken = cookies
    ?.split('; ')
    .find((row) => row.startsWith('refresh-token='))
    ?.split('=')[1];

  if ((device.type === 'mobile' || device.type === 'tablet') && url !== '/mobile') {
    return NextResponse.rewrite(new URL('/mobile', request.url));
  }

  if (!(device.type === 'mobile' || device.type === 'tablet') && url === '/mobile') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (url === '/form') {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('warning', '로그인 후 시도해주세요');
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
      redirectUrl.searchParams.set('warning', '로그인 후 시도해주세요');
      return NextResponse.redirect(redirectUrl);
    } else if (!now.isBetween(제출_시작_날짜, 입학_등록_기간, 'minute', '[]')) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('message', '입학전형 기간이 아닙니다.');
      return NextResponse.redirect(redirectUrl);
    } else {
      return NextResponse.rewrite(new URL('/form-management', request.url));
    }
  }

  if (url === '/result/first') {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('warning', '로그인 후 시도해주세요');
      return NextResponse.redirect(redirectUrl);
    } else if (!now.isBetween(일차_합격_발표, 이차_전형_시작, 'minute', '[]')) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set(
        'message',
        '정상적인 경로를 통해 1차 결과를 확인해주세요.'
      );
      return NextResponse.redirect(redirectUrl);
    } else {
      return NextResponse.rewrite(new URL('/result/first', request.url));
    }
  }

  if (url === '/result/final') {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('warning', '로그인 후 시도해주세요');
      return NextResponse.redirect(redirectUrl);
    } else if (!now.isBetween(최종_합격_발표, 입학_등록_기간, 'minute', '[]')) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set(
        'message',
        '정상적인 경로를 통해 최종 결과를 확인해주세요.'
      );
      return NextResponse.redirect(redirectUrl);
    } else {
      return NextResponse.rewrite(new URL('/result/final', request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/mobile',
    '/form',
    '/form-management',
    '/result/first',
    '/result/final',
    '/login',
    '/signup',
    '/((?!api|_next/static|_next/image|favicon.ico|svg).*)',
  ],
};
