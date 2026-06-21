import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from Squarespace CDN in case any are still referenced
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
    ],
  },
};

export default nextConfig;
