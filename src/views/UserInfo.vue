<template>
	<div>
		<div>user-info:{{ userInfo }}</div>
		<button @click="handleLogout">登出</button>
		<button @click="handleResourc">调用后端资源</button>
	</div>
</template>

<script>
export default {
	name: 'UserInfo',
	data: function() {
		return {
			userInfo: ''
		};
	},
	inject: ['$authing'],
	mounted: function() {
		let userInfo = localStorage.getItem('userInfo');
		this.userInfo = userInfo;
	},
	methods: {
		handleLogout: function() {
			localStorage.clear();
			window.location.href = this.$authing.buildLogoutUrl({ redirectUri: 'http://localhost:4000' });
		},
		handleResourc: async function() {
			try {
				let accessToken = localStorage.getItem('accessToken');
				let res = await fetch('http://localhost:5000/api/protected', {
					headers: {
						Authorization: 'Bearer ' + accessToken
					},
					method: 'GET'
				});
				let data = await res.json();
				alert(JSON.stringify(data));
			} catch (err) {
				alert('无权访问接口');
			}
		}
	}
};
</script>
