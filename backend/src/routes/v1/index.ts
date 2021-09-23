import { Router } from 'express';
import sessions from './sessions';
import orders from './orders';
import events from './events';
import vendors from './vendors';

const router = Router();

router.use('/sessions', sessions);
router.use('/orders', orders);
router.use('/events', events);
router.use('/vendors', vendors);

export default router;
