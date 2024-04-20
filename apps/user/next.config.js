/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@maru/design-token'],
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
