
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/ingest/:path*',
        destination: '/api/ingest/:path*',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
