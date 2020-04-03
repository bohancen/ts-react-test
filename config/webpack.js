const path = require('path');

module.exports = {
  // mode: 'production',
  mode: 'development',
  watch:true,
  entry: {
    polyfill: ['@babel/polyfill'],
    index: ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name].[chunkhash].js',
    // // 添加 chunkFilename
    // publicPath: '/',
    // chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    modules: ["node_modules","self_modeles"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }, // 先解析ts和tsx，rule规则从下往上
      {
        test: /\.tsx$/,
        use: ['eslint-loader'],
        exclude: [/node_modules/],
        enforce: 'pre'
      }
    ]
  }
};