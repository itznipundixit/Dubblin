import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.dubblin.co.in",
      },
      {
        protocol: "https",
        hostname: "api.dubblin.co.in",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dubblin.co.in",
      },
    ],
  },
};

export default nextConfig;
