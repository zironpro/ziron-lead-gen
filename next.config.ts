import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/digital-marketing",

	reactCompiler: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},

	experimental: {
		turbopackFileSystemCacheForBuild: true,
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
