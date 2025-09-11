import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true, // Helps with Netlify routing
};

export default nextConfig;
