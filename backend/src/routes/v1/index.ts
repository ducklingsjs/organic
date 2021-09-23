import { Router } from 'express';
import sessions from './sessions';
import orders from './orders';

const router = Router();

router.use('/sessions', sessions);
router.use('/orders', orders);

export default router;
