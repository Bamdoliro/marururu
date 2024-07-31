import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const server = process.env.NEXT_PUBLIC_BASE_URL;

const fetchLoginCheck = async (accessToken: string) => {
  const response = await fetch(`${server}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch login check');
  }

  const data = await response.json();
  return data;
};

export const middleware = async (request: NextRequest) => {
  const url = request.nextUrl.pathname;
  const cookies = request.headers.get('cookie');
  const accessToken = cookies
    ?.split('; ')
    .find((row) => row.startsWith('access-token='))
    ?.split('=')[1];

  if (
    url.startsWith('/form') ||
    url.startsWith('/notice') ||
    url.startsWith('/faq') ||
    url.startsWith('/message') ||
    url.startsWith('/fair') ||
    url.startsWith('/analysis')
  ) {
    if (!accessToken) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('message', '로그인 후 시도해주세요');
      return NextResponse.redirect(redirectUrl);
    }

    try {
      const data = await fetchLoginCheck(accessToken);
      const LOGIN_TYPE = data?.authority;

      if (LOGIN_TYPE !== 'ADMIN') {
        const redirectUrl = new URL('/', request.url);
        redirectUrl.searchParams.set('message', '어드민 계정으로만 접속이 가능합니다.');
        return NextResponse.redirect(redirectUrl);
      }
    } catch (error) {
      const redirectUrl = new URL('/', request.url);
      redirectUrl.searchParams.set('message', '인증 정보 확인에 실패했습니다.');
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|svg).*)',
    '/form/:path*',
    '/notice/:path*',
    '/faq/:path*',
    '/message/:path*',
    '/fair/:path*',
    '/analysis/:path*',
  ],
};
