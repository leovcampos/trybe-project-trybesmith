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

  async getAllMapper(): Promise<IProduct[]> {
    const allProducts = await this.productsModel.findAll();

    return allProducts;
  }

  async getAllByIdMapper(ids: number[]): Promise<IProduct[]> {
    const products = await this.productsModel.findById(ids);

    return products;
  }

  async updateProductOrder(productsIds: number[], orderId: number): Promise<void> {
    await this.productsModel.updateProductOrder(productsIds, orderId);
  }
}

export default new ProductsMapper();
