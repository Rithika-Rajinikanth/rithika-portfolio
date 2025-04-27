/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
       ignoreDuringBuilds: true,
     },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'huggingface.co',
            },
            {
                protocol: 'https',
                hostname: 'n8n.io',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            { protocol: 'https', hostname: 'cdn.worldvectorlogo.com' },
            { protocol: 'https', hostname: 'raw.githubusercontent.com' },
        ],
    },
};

export default nextConfig;

