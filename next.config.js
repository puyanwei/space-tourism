/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
