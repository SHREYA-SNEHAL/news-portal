/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow unsplash images used in mock data
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;