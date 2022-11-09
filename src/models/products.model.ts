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

  async findById(ids: number[]): Promise<IProduct[]> {
    let placeHolders = '?';
    for (let i = 1; i < ids.length; i += 1) {
      placeHolders += ', ?';
    }

    const [result] = await this.connection.execute(
      `
      SELECT * FROM Trybesmith.Products
      WHERE id IN (${placeHolders}) 
      `,
      ids,
    );

    return result as IProduct[];
  }

  async updateProductOrder(productsIds: number[], orderId: number): Promise<void> {
    let placeHolders = '?';
    for (let i = 1; i < productsIds.length; i += 1) {
      placeHolders += ', ?';
    }

    await this.connection.execute(
      `
      UPDATE Trybesmith.Products
      SET orderId = ?
      WHERE id IN (${placeHolders})
      `,
      [orderId, ...productsIds],
    );
  }
}

export default new ProductsModel();
