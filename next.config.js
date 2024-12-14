/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    images: {
      domains: ['placeholder.com'],
    },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/Adamay-Portfolio-Website' : '',
    unoptimized: true,
  }

module.exports = nextConfig