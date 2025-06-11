import { NextRequest, NextResponse } from 'next/server';

/**
 * This is a catch-all API route to proxy requests to PostHog.
 * It's placed at `src/app/api/ingest/[...path]/route.ts`.
 * It captures all requests to `/api/ingest/*` and forwards them to PostHog.
 */

// Correct the type for the second argument
async function handler(
    req: NextRequest,
    { params }: { params: { path: string[] } }
) {
    try {
        const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

        // The 'path' from params is already a string array
        const path = params.path.join('/');
        const url = `${posthogHost}/${path}`;

        const response = await fetch(url, {
            method: req.method,
            headers: {
                'Content-Type': req.headers.get('Content-Type') || '',
                'User-Agent': req.headers.get('User-Agent') || '',
                'Accept': req.headers.get('Accept') || '',
            },
            body: req.body,
            // @ts-expect-error: 'duplex' option required for streaming bodies
            duplex: 'half',
            redirect: 'follow',
        });

        return new NextResponse(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        });

    } catch (error) {
        console.error('Error in PostHog proxy route:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
    handler as HEAD,
    handler as OPTIONS,
};