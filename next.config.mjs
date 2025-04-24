/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // Set the base path for GitHub Pages
  basePath: '/chessman',

  // Set the asset prefix for GitHub Pages
  assetPrefix: '/chessman/',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: Add trailing slash for compatibility if needed
  // trailingSlash: true,
};

export default nextConfig;