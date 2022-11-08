import { IServiceResp, IUser } from '../interfaces';
import userMapperObj from '../mappers/user.mapper';
import jwtServiceObj from './jwt';

class UserService {
  private userMapper;

  private jwtService;

  constructor(userMapper = userMapperObj, jwtService = jwtServiceObj) {
    this.userMapper = userMapper;
    this.jwtService = jwtService;
  }

  async insertUserService(user: IUser): Promise<IServiceResp<IUser>> {
    const newUser = await this.userMapper.insertMapper(user);
    const token = await this.jwtService.generate(newUser);

    return { statusCode: 201, data: { token } };
  } 
}

export default new UserService();
