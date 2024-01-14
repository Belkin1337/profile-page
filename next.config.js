/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          assert: false,
          path: false,
          fs: false,
          events: false,
          process: false
        }
      };
    }
    config.module.exprContextCritical = false; 
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3006/api/:path*', 
      },
    ];
  },
  images: {
    domains: ["i.scdn.co"]
  }
}

module.exports = nextConfig
