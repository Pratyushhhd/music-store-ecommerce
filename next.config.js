/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('https://', ''),
    ].filter(Boolean),
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
