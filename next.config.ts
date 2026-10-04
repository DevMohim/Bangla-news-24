import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
