//webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",

  plugins: [
    // 빌드 전 폴더를 정리하는 플러그인
    new CleanWebpackPlugin(),
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    // 코드 최소화를 위한 플러그인
    minimizer: [
      // Javascript 파일 최소화
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // console.log 제거
          },
        },
      }),
    ],
    // 코드 분할 설정
    splitChunks: {
      chunks: "all",
    },
  },

  // 성능 경고 설정
  performance: {
    hints: false, // 경고 비활성화
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
