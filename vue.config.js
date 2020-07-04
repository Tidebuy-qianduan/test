const VUE_APP_DEV_SERVER_PROXY_TARGET = process.env.VUE_APP_DEV_SERVER_PROXY_TARGET ? process.env.VUE_APP_DEV_SERVER_PROXY_TARGET : 'http://localhost:9504';

module.exports={
  devServer: {
    port: 9531,
    proxy: {
      '/api': {
        target: VUE_APP_DEV_SERVER_PROXY_TARGET,
        changeOrigin: true
      },
      // 授权认证
      '/authentication': {
        target: VUE_APP_DEV_SERVER_PROXY_TARGET,
        changeOrigin: true
      }
    }
  },
  lintOnSave:false,
};
