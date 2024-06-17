/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "worldnews.storage.c2.liara.space",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
