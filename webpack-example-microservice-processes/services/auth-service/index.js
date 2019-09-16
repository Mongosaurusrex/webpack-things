import Koa from 'koa';
import router from './routes.js';
import config from 'config';

const {
	port,
	name,
	host,
} = config.get('services.authService');

const app = new Koa();

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(port, () => {
		console.log(`${ name  } running on ${ host }:${ port }`)
	});
