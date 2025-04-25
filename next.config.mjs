/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/chessman',
  assetPrefix: '/chessman/', // This should prefix asset URLs
  images: {
    unoptimized: true,
  },
};

export default nextConfig;