const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      ['/category', '/call', '/order', '/menu', '/member'],
      createProxyMiddleware({
         target: 'https://df2a-118-103-212-116.jp.ngrok.io',
         changeOrigin: true
      })
   );
};
