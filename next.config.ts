import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alwalaaoman.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jribpfntcosbyntbyvsg.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
