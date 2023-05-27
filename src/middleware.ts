import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis = new Redis({
    url: process.env.REDIS_URL!,
    token: process.env.REDIS_SECRET!,
});

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(2, '1 h'),
});

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/api/contact')) {
        const ip = req.ip ?? '127.0.0.1';
        try {
            const { success } = await ratelimit.limit(ip);

            if (!success) {
                return new NextResponse(
                    JSON.stringify({
                        error: 'Too many requests, Try again next hour',
                    }),
                    {
                        status: 429,
                    }
                );
            }

            return NextResponse.next();
        } catch (err) {
            return NextResponse.json({
                error: 'Internal Server Error',
            });
        }
    }
}

export const config = {
    matcher: ['/', '/api/contact'],
};
