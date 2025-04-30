import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {
        // Configure Turbo loaders here
      }
    }
  }
};

export default nextConfig;
