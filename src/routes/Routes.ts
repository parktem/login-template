import { Router } from 'express';
import * as UserRoutes from '../User/Infrastructure/UserRoutes';
const router = Router();

router.use('/users', UserRoutes);

export = router;
