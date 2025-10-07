import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? "/wedding" : "",
  assetPrefix: isProd ? "https://cuongdvt.github.io/wedding/" : "",
  images: {
    unoptimized: true, // For static exports on GitHub Pages
  },
};

export default nextConfig;
