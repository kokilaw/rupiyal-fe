/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  serverActions: {
    allowedOrigins: [
      'f1dc190e-0883-4eeb-8830-209c3e4c3762.e1-us-cdp-2.choreoapps.dev',
    ],
  },
};

export default nextConfig;
