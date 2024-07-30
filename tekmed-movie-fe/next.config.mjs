/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
