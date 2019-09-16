import Router from 'koa-router';
import handlers from './handlers/index.js';

const router = new Router();

router.get('/health', handlers.health);

export default router;
