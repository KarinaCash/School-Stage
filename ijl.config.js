/* eslint-disable no-undef */
const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'school-stage.main': '/school-stage',
    "school-stage.about": "/about",
    "school-stage.account.login": "/account/:login",
    "school-stage.teachers": "/teachers"
  },
  features: {
    'school-stage': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "school-stage.api": "/api"
  }
}
