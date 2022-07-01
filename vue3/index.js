import { createApp } from 'vue'

import router from '@/router'

import App from '@/App'

import { AuthenticationClient } from 'authing-js-sdk'

const app = createApp(App)

const authing = new AuthenticationClient({
  appId: '',
  appHost: '',
  redirectUri: '',
  tokenEndPointAuthMethod: 'none'
})

app.use(router)

app.provide('$authing', authing)

app.mount('#app')
