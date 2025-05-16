/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co"], // Add any external image domains you'll use
  },
  // Enable static exports for static hosting if needed
  // output: 'export',
  // Customize the build directory if needed
  // distDir: 'build',
};

module.exports = nextConfig;
