import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

dayjs.extend(isBetween);

export const middleware = (request: NextRequest) => {
  const { device } = userAgent(request);
  const url = request.nextUrl.pathname;

  if ((device.type === 'mobile' || device.type === 'tablet') && url !== '/mobile') {
    return NextResponse.rewrite(new URL('/mobile', request.url));
  }

  if (!(device.type === 'mobile' || device.type === 'tablet') && url === '/mobile') {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|svg).*)'],
};
