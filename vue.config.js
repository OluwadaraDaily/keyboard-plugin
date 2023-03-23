const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watch: true,
    plugins: [new BundleAnalyzerPlugin({analyzerMode: 'disabled'})]
  }
})
