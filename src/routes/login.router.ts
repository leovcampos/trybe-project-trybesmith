import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validate.login';

const router = Router();

router.post('/', validateLogin, loginController.conectUserController);

export default router;