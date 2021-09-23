import { Router } from 'express';
import { getEvent } from '../../../controllers/events/id/get';
import { getEventVendors } from '../../../controllers/events/id/vendors/get';

const router = Router();

router.get('/', getEvent);

router.get('/vendors', getEventVendors);

export default router;
