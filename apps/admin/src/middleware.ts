import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
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
