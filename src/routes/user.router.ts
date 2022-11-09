import { Router } from 'express';
import userController from '../controllers/user.controller';
import validateUser from '../middlewares/validate.user';

const router = Router();

router.post('/', validateUser, userController.insertUser);

export default router;