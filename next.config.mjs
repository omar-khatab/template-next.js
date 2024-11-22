/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"],
    },
    eslint : {
        ignoreDuringBuilds:true,
    },
};

export default nextConfig;
