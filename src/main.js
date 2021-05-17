import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
	appId: '609e48a0603eb80d4ebcc052',
	appHost: 'https://spa-demo-vue.authing.cn',
	redirectUri: 'http://localhost:8080/app',
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
