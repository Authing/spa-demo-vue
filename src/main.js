import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
	appId: 'APP_ID',
	appHost: 'https://{你的域名}.authing.cn',
	redirectUri: 'http://localhost:4000/callback',
	tokenEndPointAuthMethod: 'none'
});

Vue.config.productionTip = false;

new Vue({
	router,
	provide: {
		$authing: authing
	},
	render: h => h(App)
}).$mount('#app');
