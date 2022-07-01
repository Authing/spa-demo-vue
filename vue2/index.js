import Vue from 'vue'

import router from '@/router'
import App from '@/App'

import { AuthenticationClient } from 'authing-js-sdk'

const authing = new AuthenticationClient({
  appId: '',
  appHost: '',
  redirectUri: '',
  tokenEndPointAuthMethod: 'none'
})

new Vue({
  el: '#app',
  provide: {
    $authing: authing
  },
  router,
  render: h => h(App)
})
