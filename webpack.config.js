// Use 'import' instead of 'require' in ES Module environments
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: {
    code: './src/code.ts',
    ui: './src/ui.ts'  // Assuming UI logic is in ui.ts
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      chunks: ['ui']
    })
  ]
};
