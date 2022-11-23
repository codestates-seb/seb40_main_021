const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      ['/category', '/call', '/order', '/menu', '/member'],
      createProxyMiddleware({
         target: 'https://ee77-221-140-177-247.jp.ngrok.io',
         changeOrigin: true
      })
   );
};
