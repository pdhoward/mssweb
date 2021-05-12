const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
  })

module.exports = {
  future: {
    webpack5: true,
  },
  resolve: {
    fallback: {
      fs: false
    }
  }
}

