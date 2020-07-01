'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  VUE_APP_API: '"https://vue-course-api.hexschool.io"',
  VUE_APP_CUSTOMPATH: '"houdao"',
})
