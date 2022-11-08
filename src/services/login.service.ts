import { IServiceResp, IUser } from '../interfaces';
import userMapperObj from '../mappers/user.mapper';
import jwtObj from './jwt';
import ErrorHttp from '../middlewares/errorHttp';

class LoginService {
  private userMapper;

  private jwt;

  constructor(userMapper = userMapperObj, jwt = jwtObj) {
    this.userMapper = userMapper;
    this.jwt = jwt;
  }

  private async getByName(username: string): Promise<IUser> {
    const user = await this.userMapper.getByNameMapper(username);

    return user;
  }

  async conectUserService({ username, password }: IUser): Promise<IServiceResp<IUser>> {
    const user = await this.getByName(username);

    if (!user || user.password !== password) {
      throw new ErrorHttp(401, 'Username or password invalid');
    }
    const jwt = this.jwt.generate(user);

    return {
      statusCode: 200,
      data: { jwt },
    };
  }
}

export default new LoginService();
