import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';
import connectionObj from './connection';

class UserModel {
  public connection: Pool;

  constructor(connection = connectionObj) {
    this.connection = connection;
  }

  async insertUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    return { id: insertId, ...user };
  }

  async getByName(username: string): Promise<IUser> {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=?',
      [username],
    );
    return user as IUser;
  }
}

export default new UserModel();
