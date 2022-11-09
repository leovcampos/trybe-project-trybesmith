import { Router } from 'express';
import orderController from '../controllers/order.controller';
import authentication from '../middlewares/authentication';
import validateOrder from '../middlewares/validate.order';

const router = Router();

router.get('/', orderController.getAllController);

router.post('/', authentication, validateOrder, orderController.newOrder);

export default router;
