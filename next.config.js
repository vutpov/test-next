// next.config.js
const withTwin = require('./withTwin.js')
const withPWA = require('next-pwa')({
    disable: process.env.NODE_ENV === 'development'
});
const { withPlugins } = require("next-compose-plugins");


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
}

const plugins = [
  [withPWA],
]

module.exports = withPlugins(plugins, withTwin(nextConfig))