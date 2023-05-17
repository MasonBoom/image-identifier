const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "crypto": false,
        },
      },
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /^crypto$/,
          contextRegExp: /@tensorflow[\\/]tfjs-core[\\/]dist$/,
        }),
      ],
    },
  },
};