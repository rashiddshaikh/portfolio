/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove all experimental or turbo options.
  // Turbopack works automatically in Next.js 16.

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
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
        loader: "@svgr/webpack",
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // IMPORTANT: Add empty turbopack config to silence warnings
  turbopack: {},
};

module.exports = nextConfig;
