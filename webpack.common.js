const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  // entry 파일 설정
  entry: "./src/index.tsx",
  output: {
    // 번들링된 파일이 저장될 경로
    path: path.resolve(__dirname, "build"),
    // 번들링된 파일 이름(캐싱을 위해 파일 이름에 해시값을 추가)
    filename: "[name].[contenthash:8].bundle.js",
    // 빌드 전 폴더를 정리하는 옵션
    clean: true,
    // 웹사이트에서 정적 자원을 참조하는 기본 경로 설정
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.svg$/,
        // SVG를 처리하기 위해 @svgr/webpack 사용
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    // Typescript의 타입 검사를 위한 플러그인
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    // 경로 별칭 설정 (예: "@/components"를 "src/components"로 해석)
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
