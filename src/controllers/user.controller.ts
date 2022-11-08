import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userServiceObj from '../services/user.service';

class UserController {
  private userService;

  constructor(userService = userServiceObj) {
    this.userService = userService;
  }

  insertUser = async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const { statusCode, data } = await this.userService.insertUserService(user);

    res.status(statusCode).json(data);
  };
}

export default new UserController();