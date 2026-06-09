import type { NextConfig } from "next";

const repo = "/sipky_web";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? repo : "",
  assetPrefix: isGithubPages ? repo : "",
  trailingSlash: true,
};

export default nextConfig;
