const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ['react-remove-properties', { properties: ['data-test'] }],
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('prd'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
