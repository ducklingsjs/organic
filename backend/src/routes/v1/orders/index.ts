import { Router } from 'express';
import { allowVendor } from '../../../middlewares/guards/allowVendor';
import orderId from './id';

const router = Router();

router.use(allowVendor);

router.use('/:id', orderId);

router.get('/');

export default router;
