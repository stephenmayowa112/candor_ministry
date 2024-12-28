/** @type {import('next').NextConfig} */ // Important: Add this JSDoc comment for type checking/autocompletion
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost'],
    path: '/_next/image',
  },
};

module.exports = nextConfig; // Use module.exports for CommonJS