import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

export const middleware = (request: NextRequest) => {
    const { device } = userAgent(request);
    const url = request.nextUrl.pathname;

    if (device.type === 'mobile' && url !== '/mobile') {
        return NextResponse.redirect(new URL('/mobile', request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: ['/mobile'],
};
