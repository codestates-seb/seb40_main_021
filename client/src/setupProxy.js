const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      ['/category', '/call', '/order', '/menu', '/member'],
      createProxyMiddleware({
         target: 'http://ec2-15-164-244-227.ap-northeast-2.compute.amazonaws.com',
         changeOrigin: true
      })
   );
};
