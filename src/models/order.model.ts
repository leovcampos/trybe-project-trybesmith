import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import connectionObj from './connection';

class OrderModel {
  public connection: Pool;

  constructor(connection = connectionObj) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT
        pr.orderId AS id,
        Ord.userId,
        JSON_ARRAYAGG(pr.id) as productsIds
      FROM Trybesmith.Products as pr        
      INNER JOIN Trybesmith.Orders as Ord
      ON pr.orderId = Ord.Id
      GROUP BY pr.orderId`,
    );

    return result as IOrder[];
  }
}

export default new OrderModel();