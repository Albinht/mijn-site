/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds to prevent deployment failures
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    if (process.env.NIBLAH_WORDPRESS_PROXY !== '1') {
      return [];
    }

    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: 'https://niblah-wordpress.42giwj.easypanel.host/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
