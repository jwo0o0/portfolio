/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
