import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wedding",
  images: {
    qualities: [40],
    unoptimized: true, // For static exports on GitHub Pages
  },
};

export default nextConfig;
