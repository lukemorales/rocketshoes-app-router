/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rocketseat-cdn.s3-sa-east-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
