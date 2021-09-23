import { Router } from 'express';
import { allowUser } from '../../../middlewares/guards/allowUser';
import { getEvents } from '../../../controllers/events/index/get';
import { getEvent } from '../../../controllers/events/id/get';
import { getEventVendors } from '../../../controllers/events/id/vendors/get';

const router = Router();

// router.use(allowUser);

// router.use('/:event_id', eventId);

router.get('/:event_id', getEvent);

router.get('/:event_id/vendors', getEventVendors);

router.get('/', getEvents);

export default router;
