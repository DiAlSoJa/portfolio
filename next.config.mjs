/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
      SERVICE_ID:process.env.SERVICE_ID,
    TEMPLATE_ID:process.env.TEMPLATE_ID,
    USER_ID:process.env.USER_ID
    },
};

export default nextConfig;
