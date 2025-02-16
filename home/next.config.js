/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
	images: {
		domains: [],
	},

	transpilePackages: ['@limeplay/core'],

	async rewrites() {
		const isVercel = !!process.env.VERCEL_ENV;
		if (isVercel) {
			return {
				beforeFiles: [
					{
						source: '/:path*.map',
						destination: '/404',
					},
				],
			};
		}

		return [];
	},
};

module.exports = nextConfig;

module.exports = withSentryConfig(
	module.exports,
	{
		// For all available options, see:
		// https://github.com/getsentry/sentry-webpack-plugin#options

		// Suppresses source map uploading logs during build
		silent: true,

		org: 'winoffrg',
		project: 'limeplay',
	},
	{
		// For all available options, see:
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

		// Upload a larger set of source maps for prettier stack traces (increases build time)
		widenClientFileUpload: true,

		// Transpiles SDK to be compatible with IE11 (increases bundle size)
		transpileClientSDK: true,

		// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
		tunnelRoute: '/monitoring',

		// Hides source maps from generated client bundles
		hideSourceMaps: true,

		// Automatically tree-shake Sentry logger statements to reduce bundle size
		disableLogger: true,

		disableClientWebpackPlugin: true,
	}
);
