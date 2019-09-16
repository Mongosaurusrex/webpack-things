export default {
	health: async (ctx) => {
		ctx.body = {
			from: 'order-service',
			data: 'lgtm',
		} 
	},
}
