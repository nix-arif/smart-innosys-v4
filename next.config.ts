import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable eslint during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
