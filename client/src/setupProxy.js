const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      ['/category', '/call', '/order', '/menu', '/member'],
      createProxyMiddleware({
         target: 'https://de6a-211-222-84-39.jp.ngrok.io/',
         changeOrigin: true
      })
   );
};
