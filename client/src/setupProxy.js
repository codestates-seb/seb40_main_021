const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      ['/category', '/call', '/order', '/menu', '/member'],
      createProxyMiddleware({
<<<<<<< HEAD
         target: 'https://de6a-211-222-84-39.jp.ngrok.io/',
=======
         target: 'https://e78d-118-103-212-116.jp.ngrok.io',
>>>>>>> 16a9cc13021aeaa5caecafe2546830e993a6fd6e
         changeOrigin: true
      })
   );
};
