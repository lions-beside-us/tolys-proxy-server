const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 5000;
const path = require('path');

const app = express();

app.use(express.static('./dist'));

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

app.use('/:current', (req, res) => {
  console.log('hit');
  res.sendFile(path.join(__dirname,'/src/index.html'));
});

app.listen(port, () => {
  console.log(`proxy server listening on http://localhost:${port}/`)
});

module.exports = app;