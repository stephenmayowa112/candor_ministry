/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    path: '/_next/image',
  },
};

module.exports = nextConfig; 