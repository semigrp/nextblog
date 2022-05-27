/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// repository_name はそれぞれの値に置き換える
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/nextblogs" : "",
  trailingSlash: true,
};