export default {
	health: async (ctx) => {
		ctx.body = {
			from: 'user-service',
			data: 'lgtm',
		};
	},
}
