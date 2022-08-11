/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	env: {
		mongodburl: 'mongodb+srv://moises717:iFgxmGjj0GUnOlhK@cluster0.lovjl.mongodb.net/?retryWrites=true&w=majority',
	},
};

module.exports = nextConfig;
