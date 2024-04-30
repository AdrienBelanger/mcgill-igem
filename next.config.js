/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mcgill-igem-staging',
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "",
  },
  loaders: ["style-loader", "css-loader", "less-loader"],
};

module.exports = nextConfig;
