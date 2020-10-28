const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 80;
const path = require('path');

const app = express();

app.use(express.static('./dist'));


app.use('/comments', createProxyMiddleware({
  target: 'http://52.14.128.124:4000/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/hashtags', createProxyMiddleware({
  target: 'http://18.189.26.97:4001/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/users', createProxyMiddleware({
  target: 'http://18.218.58.9:4002/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/users', createProxyMiddleware({
  target: 'http://3.16.151.4:4002/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/relatedTracks', createProxyMiddleware({
  target: 'http://3.15.220.99:3001/',
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
  console.log(`proxy server listening on h${port}/`)
});

// local build
// app.use('/comments', createProxyMiddleware({
//   target: 'http://localhost:4000/',
//   headers: {
//     method: 'GET'
//   },
//   changeOrigin: true
// }));

// app.use('/hashtags', createProxyMiddleware({
//   target: 'http://localhost:4001/',
//   headers: {
//     method: 'GET'
//   },
//   changeOrigin: true
// }));

// app.use('/users', createProxyMiddleware({
//   target: 'http://localhost:4002/',
//   headers: {
//     method: 'GET'
//   },
//   changeOrigin: true
// }));

// app.use('/:current', (req, res) => {
//   console.log('hit');
//   res.sendFile(path.join(__dirname,'/src/index.html'));
// });

// app.listen(port, () => {
//   console.log(`proxy server listening on http://localhost:${port}/`)
// });

module.exports = app;