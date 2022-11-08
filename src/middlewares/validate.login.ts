import { NextFunction, Request, Response } from 'express';
import ErrorHttp from './errorHttp';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    throw new ErrorHttp(400, '"username" is required');
  }
  if (!password) {
    throw new ErrorHttp(400, '"password" is required');
  }

  next();
};

export default validateLogin;
