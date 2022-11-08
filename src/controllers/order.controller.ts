import { Request, Response } from 'express';
import { IServiceResp, IOrder } from '../interfaces';
import orderServiceObj from '../services/order.service';

class OrderController {
  private orderService;

  constructor(orderService = orderServiceObj) {
    this.orderService = orderService;
  }

  getAllController = async (_req: Request, res: Response): Promise<void> => {
    const { statusCode, data }: IServiceResp<IOrder[]> = await this.orderService.getAllService();

    res.status(statusCode).json(data);
  };
}

export default new OrderController();
