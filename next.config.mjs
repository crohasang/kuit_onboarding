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
      ],
    },
  };
  
  export default nextConfig;