import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

export const middleware = (request: NextRequest) => {
    const url = request.url;
    const { device } = userAgent(request);

    if (device.type === 'mobile' && url !== '/mobile') {
        return NextResponse.redirect(new URL('/mobile', request.url));
    }
};
