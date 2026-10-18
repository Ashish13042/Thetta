import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "localhost:3000",
    "127.0.0.1",
    "127.0.0.1:3000",
    "meeramfragrances.com",
    "dripdrip.in",
    "myotakuworld.com",
  ],
}

export default nextConfig

