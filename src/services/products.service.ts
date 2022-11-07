import { IServiceResp, IProduct } from '../interfaces';
import productsMapperObj from '../mappers/products.mapper';

class ProductsServices {
  private productsMapper;

  constructor(productsMapper = productsMapperObj) {
    this.productsMapper = productsMapper;
  }

  async insertService({ name, amount }: IProduct): Promise<IServiceResp<IProduct>> {
    const productCreated = await this.productsMapper.insertMapper({ name, amount });

    return { statusCode: 201, data: productCreated };
  }
}

export default new ProductsServices();
