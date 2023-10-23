/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.FWP_API_KEY,
    }
}

module.exports = nextConfig
