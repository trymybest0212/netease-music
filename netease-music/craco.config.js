const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  devServer: {
    compress: true,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000", // 目标服务器地址
    //     changeOrigin: true, // 是否改变原始主机头为目标URL
    //     pathRewrite: { "^/api": "" }, // 重写请求路径
    //     secure: false,
    //   },
    // },
  },
};
