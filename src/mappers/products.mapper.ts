import { IProduct } from '../interfaces';
import productsModelObj from '../models/products.model';

class ProductsMapper {
  private productsModel;

  constructor(productsModel = productsModelObj) {
    this.productsModel = productsModel;
  }

  async insertMapper({ name, amount }: IProduct): Promise<IProduct> {
    const product = await this.productsModel.insert({ name, amount });

    return product;
  }
}

export default new ProductsMapper();
