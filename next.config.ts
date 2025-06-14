import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.wikia.nocookie.net"],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: require("./package.json").version,
  },
};

export default nextConfig;
