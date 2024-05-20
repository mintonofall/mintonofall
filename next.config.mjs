/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "imagedelivery.net" },
      {
        protocol: "https",
        hostname: "mintonofall.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
