import { Request, Response } from 'express';
import { IProduct, IServiceResp } from '../interfaces';
import productsServiceObj from '../services/products.service';

class ProductsController {
  private productsService;

  constructor(productsService = productsServiceObj) {
    this.productsService = productsService;
  }

  insertController = async (req: Request, res: Response): Promise<void> => {
    const { name, amount }: IProduct = req.body;
    const { statusCode, data }: IServiceResp<IProduct> = await
    this.productsService.insertService({ name, amount });

    res.status(statusCode).json(data);
  };
}

export default new ProductsController();