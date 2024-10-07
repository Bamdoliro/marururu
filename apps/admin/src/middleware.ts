import { NextResponse } from 'next/server';

export const middleware = async () => {
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
