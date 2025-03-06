/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "example.com",
      "another-domain.com",
      "cdn.example.org",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
