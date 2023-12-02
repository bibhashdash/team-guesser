/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa')(
    {
        dest: "public",
        register: true,
        skipWaiting: true,
    }
);
const nextConfig = withPwa({
  // next config
})

module.exports = nextConfig
