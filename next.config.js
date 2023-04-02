const withPWA = require('next-pwa');
const { withContentlayer } = require('next-contentlayer');

module.exports = withPWA(
  withContentlayer({
    reactStrictMode: false,
    swcMinify: true,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development'
    },
    experimental: {
      appDir: true
    }
  })
);
