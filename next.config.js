/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true
    },
    // Add this to help with path resolution
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    // Add trailing slash to help with path matching
    trailingSlash: true,
  }
  
  module.exports = nextConfig