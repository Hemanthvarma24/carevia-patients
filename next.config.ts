import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/patients",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;