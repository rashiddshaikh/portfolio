/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js to use Webpack instead of Turbopack
  webpack: (config) => {
    // Custom SVG handling
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ },
        loader: '@svgr/webpack',
        options: { dimensions: false, titleProp: true },
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // ⛔ REMOVE TURBOPACK CONFIG
  turbopack: {}, // tells Next.js "I am intentionally using Webpack"
};

module.exports = nextConfig;
