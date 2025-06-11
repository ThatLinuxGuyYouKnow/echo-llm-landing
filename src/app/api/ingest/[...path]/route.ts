import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
    const upstreamPath = params.path.join('/')
    const url = `https://us.i.posthog.com/${upstreamPath}`

    const res = await fetch(url, {
        method: 'GET',
        headers: {

            'Content-Type': 'application/json',
            'User-Agent': request.headers.get('user-agent') || '',
        },

    })

    const body = await res.text()


    const contentType = res.headers.get('content-type') || 'application/octet-stream'

    return new Response(body, {
        status: res.status,
        headers: {
            'Content-Type': contentType,
            'X-Content-Type-Options': 'nosniff',
        },
    })
}
