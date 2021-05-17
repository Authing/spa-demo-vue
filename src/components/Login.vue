<template>
	<button @click="handeLogin">点击登录</button>
</template>

<script>
export default {
	name: 'Login',
	inject: ['$authing'],
	methods: {
		handeLogin: async function() {
			// PKCE 场景使用示例
			// 生成一个 code_verifier
			let codeChallenge = this.$authing.generateCodeChallenge();
			localStorage.setItem('codeChallenge', codeChallenge);
			// 计算 code_verifier 的 SHA256 摘要
			let codeChallengeDigest = this.$authing.getCodeChallengeDigest({ codeChallenge, method: 'S256' });
			// 构造 OIDC 授权码 + PKCE 模式登录 URL
			let url = this.$authing.buildAuthorizeUrl({ codeChallenge: codeChallengeDigest, codeChallengeMethod: 'S256' });
			window.location.href = url;
		}
	}
};
</script>
