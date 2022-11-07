import { Router } from 'express';
import productsControllers from '../controllers/prodcuts.controller';

const router = Router();

router.get('/', productsControllers.findAllController);
router.post('/', productsControllers.insertController);

export default router;