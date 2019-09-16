export default {
	health: async (ctx) => {
		ctx.body = {
			from: 'auth-service',
			data: 'lgtm',
		} 
	},
}
