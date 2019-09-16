import Koa from 'koa';
import router from './routes.js';
import config from 'config';

const {
	host,
	name,
	port,
} = config.get('services.userService');

const app = new Koa();

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(port, () => {
		console.log(`${ name } running on ${ host }:${ port }`);
	});
