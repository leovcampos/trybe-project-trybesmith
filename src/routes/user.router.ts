import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.post('/', userController.insertUser);

export default router;