import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';
import connectionObj from './connection';

class ProductsModel {
  public connection: Pool;

  constructor(connection = connectionObj) {
    this.connection = connection;
  }

  async insert(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return {
      id: insertId,
      ...product,
    };
  }

  async findAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as IProduct[];
  }
}

export default new ProductsModel();
