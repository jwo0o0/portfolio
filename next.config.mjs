/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://jwo0o0.github.io/portfolio"
    : "";
const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
