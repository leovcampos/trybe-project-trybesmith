import { Router } from 'express';
import productsControllers from '../controllers/prodcuts.controller';
import validateProduct from '../middlewares/validate.products';

const router = Router();

router.get('/', productsControllers.findAllController);
router.post('/', validateProduct, productsControllers.insertController);

export default router;