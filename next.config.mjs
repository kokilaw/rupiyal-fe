/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  serverActions: {
    allowedOrigins: [
      'f1dc190e-0883-4eeb-8830-209c3e4c3762.e1-us-cdp-2.choreoapps.dev',
      '3f5bd791-ba97-4f86-92e7-ad0e0ac4467e.e1-us-cdp-2.choreoapps.dev'
    ],
  },
};

export default nextConfig;
