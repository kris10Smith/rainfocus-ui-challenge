// next.config.ts
import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
	sassOptions: {
		// so you can @use or @import from "styles/..." if you want
		includePaths: [path.join(__dirname, "src/styles")],
	},

	// Empty turbopack config silences the
	// "webpack config with no turbopack config" warning.
	turbopack: {},
	output: 'export',
}

export default nextConfig
