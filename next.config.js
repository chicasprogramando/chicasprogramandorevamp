const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  ignoreTypes: ["svg"],
  webpack(config, options) {
    return config
  },
})