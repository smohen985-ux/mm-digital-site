/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
        basePath: "/mm-digital-site",
        assetPrefix: "/mm-digital-site/",
        images: { unoptimized: true },
        trailingSlash: true,
          };

export default nextConfig;
