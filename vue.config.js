const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
  },
  transpileDependencies: true,
});
