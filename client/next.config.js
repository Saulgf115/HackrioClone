const withCSS = require('@zeit/next-css')
const withLess = require("next-with-less");

module.exports = withCSS({})
module.exports = withLess({});
// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8000/api',
          },
        ]
      },
  };