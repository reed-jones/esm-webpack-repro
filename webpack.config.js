const path = require('path');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  target: 'node',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
       new EsmWebpackPlugin(),
  ]
};
