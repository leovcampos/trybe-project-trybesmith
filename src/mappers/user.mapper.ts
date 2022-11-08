import { IUser } from '../interfaces';
import userModelObj from '../models/user.model';

class UserMapper {
  private userModel;

  constructor(userModel = userModelObj) {
    this.userModel = userModel;
  }

  async insertMapper(user: IUser): Promise<IUser> {
    const newUser = await this.userModel.insertUser(user);

    return newUser;
  }
}

export default new UserMapper();
