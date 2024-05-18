/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "",
  },
  loaders: ["style-loader", "css-loader", "less-loader"],
};

module.exports = nextConfig;
