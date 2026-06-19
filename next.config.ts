import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/digital-marketing",

	reactCompiler: true,

	experimental: {
		turbopackFileSystemCacheForBuild: true,
		turbopackFileSystemCacheForDev: true,
	},
};

export default nextConfig;
