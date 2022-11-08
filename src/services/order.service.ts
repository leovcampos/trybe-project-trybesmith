import { IServiceResp, IOrder } from '../interfaces';
import orderMapperObj from '../mappers/order.mapper';
import productsMapperObj from '../mappers/products.mapper';

class OrderService {
  private orderMapper;

  private productMapper;

  constructor(orderMapper = orderMapperObj, productMapper = productsMapperObj) {
    this.orderMapper = orderMapper;
    this.productMapper = productMapper;
  }

  async getAllService(): Promise<IServiceResp<IOrder[]>> {
    const orders = await this.orderMapper.getAllMapper();

    return {
      statusCode: 200,
      data: orders,
    };
  }
}

export default new OrderService();
