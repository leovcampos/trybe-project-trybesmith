import { IOrder } from '../interfaces';
import orderModelObj from '../models/order.model';

class OrderMapper {
  private orderModel;

  constructor(orderModel = orderModelObj) {
    this.orderModel = orderModel;
  }

  async getAllMapper(): Promise<IOrder[]> {
    const orders = await this.orderModel.findAll();

    return orders;
  } 
}

export default new OrderMapper();
