// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add custom image configurations
  images: {
    unoptimized: true,  // Disable image optimization if needed
    domains: ['localhost'],
    path: '/_next/image',
  },
  // Handle custom base path if applicable
  // basePath: '/my-website',
};

export default nextConfig;