import { NextRequest, NextResponse } from 'next/server';

/**
 * This is a catch-all API route to proxy requests to PostHog.
 * It's placed at `src/app/api/ingest/[...path]/route.ts`.
 * It captures all requests to `/api/ingest/*` and forwards them to PostHog.
 */

// This single handler function will process all incoming requests (GET, POST, etc.)
async function handler(
    req: NextRequest,
    { params }: { params: { path: string[] } }
) {
    try {
        // 1. Construct the full destination URL for the PostHog API.
        // It's good practice to use an environment variable for the host.
        const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

        // The `params.path` will be an array of the URL segments.
        // For example, a request to `/api/ingest/decide` will result in `params.path` being `['decide']`.
        // We join them to reconstruct the path.
        const path = params.path.join('/');
        const url = `${posthogHost}/${path}`;

        // 2. Forward the request to PostHog.
        // We stream the body directly from the incoming request to the outgoing `fetch`.
        // This is highly efficient as it avoids loading the entire request body into memory.
        const response = await fetch(url, {
            method: req.method,
            headers: {
                // Forward essential headers from the original client request.
                'Content-Type': req.headers.get('Content-Type') || '',
                'User-Agent': req.headers.get('User-Agent') || '',
                // PostHog uses 'Accept' for some content negotiation.
                'Accept': req.headers.get('Accept') || '',
            },
            // The body of the request is passed through as a stream.
            body: req.body,
            // The `duplex: 'half'` property is required by Node.js's fetch implementation
            // when forwarding a streaming request body. Vercel's runtime needs this.
            // We use @ts-expect-error because the standard TS lib might not have this type yet.
            // @ts-expect-error
            duplex: 'half',
            // Ensure we follow any redirects from PostHog.
            redirect: 'follow',
        });

        // 3. Return a new response based on the response from PostHog.
        // We stream the response body from PostHog directly back to the original client.
        return new NextResponse(response.body, {
            status: response.status,
            statusText: response.statusText,
            // Copy all headers from the PostHog response to our new response.
            headers: response.headers,
        });

    } catch (error) {
        console.error('Error in PostHog proxy route:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

// Export the same handler for all common HTTP methods.
// This makes your proxy versatile and handles all of PostHog's endpoints.
export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
    handler as HEAD,
    handler as OPTIONS,
};
