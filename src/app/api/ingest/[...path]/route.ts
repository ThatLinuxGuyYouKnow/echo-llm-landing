import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
    const upstreamPath = params.path.join('/')
    const upstreamUrl = `https://us.i.posthog.com/${upstreamPath}`
    const upstreamRes = await fetch(upstreamUrl, {
        method: 'GET',
        headers: {

        },
    })

    const headers = new Headers(upstreamRes.headers)


    headers.delete('set-cookie')


    if (upstreamPath.endsWith('config.js')) {
        headers.set('Content-Type', 'application/javascript')
    }



    const body = await upstreamRes.arrayBuffer()
    return new NextResponse(body, {
        status: upstreamRes.status,
        headers,
    })
}

export const POST = GET
export const HEAD = GET
