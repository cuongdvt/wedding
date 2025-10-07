import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wedding",
  images: {
    unoptimized: true, // For static exports on GitHub Pages
  },
};

export default nextConfig;
