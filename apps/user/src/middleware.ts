import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.url;
    const { device } = userAgent(request);

    if (device.type === 'mobile' && url !== '/mobile') {
        return NextResponse.rewrite(new URL('/mobile', request.url));
    }
}
