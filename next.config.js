/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "/",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath) => resourcePath.endsWith('.module.scss'),
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
