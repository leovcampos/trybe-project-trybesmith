import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import loginServiceObj from '../services/login.service';

class LoginController {
  private loginService;

  constructor(loginService = loginServiceObj) {
    this.loginService = loginService;
  }

  conectUserController = async (req: Request, res: Response) => {
    const { username, password }: IUser = req.body;
    const { statusCode, data } = await this.loginService.conectUserService({ username, password });

    res.status(statusCode).json(data);
  };
}

export default new LoginController();
