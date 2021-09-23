import { Router } from 'express';
import { getOrderById } from '../../../controllers/order/id/get';
import { updateOrderById } from '../../../controllers/order/id/patch';
import { getOrders } from '../../../controllers/order/index/get';
import { createOrder } from '../../../controllers/order/index/post';

const router = Router();

router.get('/:id', getOrderById);
router.patch('/:id', updateOrderById);

router.get('/', getOrders);
router.post('/', createOrder);

export default router;
