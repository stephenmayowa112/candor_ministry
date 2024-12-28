/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  },

  images: {
    unoptimized: true,
    domains: ['localhost'],
    path: '/_next/image',
  },
};

module.exports = nextConfig; 