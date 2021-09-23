import { Router } from 'express';

import sessions from './sessions';

const router = Router();

router.use('/sessions', sessions);

export default router;
