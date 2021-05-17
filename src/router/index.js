import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/app',
		name: 'App',
		component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
	},
	{
		path: '/user-info',
		name: 'UserInfo',
		component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
