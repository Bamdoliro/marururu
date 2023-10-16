/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@maru/theme'],
    images: {
        domains: ['s3.ap-northeast-2.amazonaws.com'],
    },
};

module.exports = nextConfig;
