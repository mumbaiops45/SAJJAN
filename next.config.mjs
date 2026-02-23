/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static hosting (Netlify)

  images: {
    unoptimized: true, // VERY IMPORTANT for static export
  },

  trailingSlash: true, // Prevents 404 on static hosting
};

export default nextConfig;