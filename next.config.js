/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optional: Change the build app's base path `` -> `/a1`
  basePath: '/a1',
  // Optional: Change the static export output directory `out` -> `docs`
  distDir: 'docs',
  // Optional: Enable a static export
  output: 'export',
  // Optional: Redirect URLs without trailing slashes to their counterpart with.
  trailingSlash: true,
}

module.exports = nextConfig
