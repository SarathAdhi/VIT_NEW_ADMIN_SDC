/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "vit.ac.in",
      "cdn.pixabay.com",
      "images.pexels.com",
      "media.istockphoto.com",
    ],
  },
  env: {
    SERVER_BASE_URL: process.env.SERVER_BASE_URL,
  },
};

module.exports = nextConfig;
