/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://silent.engineer/pocs'
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/pocs' 
    : ''
};

module.exports = nextConfig;
