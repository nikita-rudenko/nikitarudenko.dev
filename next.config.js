const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/nikita-rudenko-291356183/',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
