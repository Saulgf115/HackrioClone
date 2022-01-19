const withCSS = require('@zeit/next-css')
const withLess = require("next-with-less");

module.exports = withCSS({
  publicRuntimeConfig:{
    APP_NAME:'HACKRIOCLONE',
    API:'http://localhost:8000/api',
    PRODUCTION: false,
    DOMAIN:'http://localhost:8000',
    FB_APP_ID:'IDFIUFDJFDHF'
  }
})
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

  module.exports = {
    env: {
      API: 'my-http://localhost:8000/api',
    },
  }

  module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      APP_NAME:'HACKRIOCLONE',
      API:'http://localhost:8000/api',
      PRODUCTION: false,
      DOMAIN:'http://localhost:8000',
      FB_APP_ID:'IDFIUFDJFDHF'
    },
  }