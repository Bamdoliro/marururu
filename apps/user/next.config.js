/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@maru/ui'],
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
    };
  },
};
