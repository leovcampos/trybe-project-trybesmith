import { IServiceResp, IOrder } from '../interfaces';
import orderMapperObj from '../mappers/order.mapper';
import productsMapperObj from '../mappers/products.mapper';
import ErrorHttp from '../middlewares/errorHttp';

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

  async insertOrderService(userId: number, productsIds: number[]): Promise<IServiceResp<IOrder>> {
    const products = await this.productMapper.getAllByIdMapper(productsIds);
    if (products.length !== productsIds.length) {
      throw new ErrorHttp(400, 'One or more productsIds are invalid');
    }
    const newOrder = await this.orderMapper.insertOrderMapper(userId);

    await this.productMapper.updateProductOrder(productsIds, newOrder.id as number);

    return {
      statusCode: 201,
      data: { userId, productsIds },
    };
  }
}

export default new OrderService();
