//webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  // 웹팩 개발 서버 설정
  devServer: {
    open: true, // 개발 서버 실행 시 브라우저를 자동으로 열어줌
    hot: true, // HMR(Hot Module Replacement)을 사용할 수 있게 해줌
    historyApiFallback: true, // SPA에서 react-router-dom을 사용할 때 404 에러가 발생하는 것을 방지
    compress: true, // gzip 압축
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
