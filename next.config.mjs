/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
      ],
    },
    async rewrites() {
      return [
        {
          source: '/lottie/:path*',
          destination: 'https://d1vuw798i1lfdr.cloudfront.net/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;