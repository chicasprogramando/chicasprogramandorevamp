'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AUTH_DOMAIN: '"dev-exk-xl9z.auth0.com"',
  AUTH_CLIENT_ID: '"nJ6w7iU2k1bNauqRbxuGKHAAPodUx083"',
  AUTH_AUDIENCE: '"https://dev-exk-xl9z.auth0.com/api/v2/"',
  AUTH_REDIRECT_URI: '"http://localhost:8080/callback"'
})
