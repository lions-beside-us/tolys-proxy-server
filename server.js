const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 5000;

const app = express();

app.use('/comments', createProxyMiddleware({
  target: 'http://localhost:4000/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/hashtags', createProxyMiddleware({
  target: 'http://localhost:4001/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/users', createProxyMiddleware({
  target: 'http://localhost:4002/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`proxy server listening on http://localhost:${port}/`)
});

module.exports = app;