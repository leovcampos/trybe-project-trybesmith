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

  async insertOrderMapper(userId: number): Promise<IOrder> {
    const order = await this.orderModel.insert(userId);

    return order;
  }
}

export default new OrderMapper();
