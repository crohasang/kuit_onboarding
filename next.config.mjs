/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      minimumCacheTTL: 60 * 60 * 24 * 30,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd1vuw798i1lfdr.cloudfront.net',
          port: '',
          pathname: '/sixth-introduce/**',
        },
        {
          protocol: 'https',
          hostname: 'd1vuw798i1lfdr.cloudfront.net',
          port: '',
          pathname: '/sixth-hackathon/**',
        },
        {
          protocol: 'https',
          hostname: 'd1vuw798i1lfdr.cloudfront.net',
          port: '',
          pathname: '/seventh-introduce/**',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/lottie/seventh-introduce/:path*',
          destination: 'https://d1vuw798i1lfdr.cloudfront.net/sixth-introduce/:path*',
        },
        {
          source: '/lottie/:path*',
          destination: 'https://d1vuw798i1lfdr.cloudfront.net/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
