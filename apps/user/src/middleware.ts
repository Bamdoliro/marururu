import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { device } = userAgent(request);
  const url = request.nextUrl.pathname;

  if ((device.type === 'mobile' || device.type === 'tablet') && url !== '/mobile') {
    return NextResponse.rewrite(new URL('/mobile', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/mobile', '/((?!api|_next/static|_next/image|favicon.ico|svg).*)'],
};
