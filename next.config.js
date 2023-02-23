/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
