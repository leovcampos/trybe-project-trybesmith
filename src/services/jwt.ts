import * as JWT from 'jsonwebtoken';
import { IUser } from '../interfaces';
import ErrorHttp from '../middlewares/errorHttp';

class Token {
  private jwt;

  constructor(jwt = JWT) {
    this.jwt = jwt;
  }

  generate({ username, password, id }: IUser): string {
    const secret = process.env.JWT_SECRET as string || 'secret';
    const jwtToken = this.jwt.sign({ username, password, id }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return jwtToken;
  }

  verifyToken(token: string): IUser {
    try {
      const secret = process.env.JWT_SECRET as string || 'secret';
      const decoded = this.jwt.verify(token, secret) as { user: IUser };
      return decoded.user;
    } catch (e) {
      throw new ErrorHttp(401, 'Invalid token');
    }
  } 
}

export default new Token();
