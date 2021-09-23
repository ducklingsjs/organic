import { Router } from 'express';
import { getVendorById } from '../../../controllers/vendor/id/get';

const router = Router();

router.get('/:id', getVendorById);

export default router;
