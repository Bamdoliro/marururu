/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@maru/design-token'],
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/form',
        destination: '/',
        permanent: false,
      },
      {
        source: '/form-management',
        destination: '/',
        permanent: true,
      },
      {
        source: '/error',
        destination: '/',
        permanent: true,
      },
      {
        source: '/not-found',
        destination: '/',
        permanent: true,
      },
      {
        source: '/result/first',
        destination: '/',
        permanent: true,
      },
      {
        source: '/result/final',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
