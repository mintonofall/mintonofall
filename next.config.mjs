/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "mintonofall.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
