import { NextFunction, Request, Response } from 'express';
import ErrorHttp from './errorHttp';

const validateName = (name: unknown): void => {
  if (!name) {
    throw new ErrorHttp(400, '"name" is required');
  }
  if (typeof name !== 'string') {
    throw new ErrorHttp(422, '"name" must be a string');
  }
  if (name.length < 3) {
    throw new ErrorHttp(422, '"name" length must be at least 3 characters long');
  }
};

const validateAmount = (amount: unknown): void => {
  if (!amount) {
    throw new ErrorHttp(400, '"amount" is required');
  }

  if (typeof amount !== 'string') {
    throw new ErrorHttp(422, '"amount" must be a string');
  }

  if (amount.length < 3) {
    throw new ErrorHttp(422, '"amount" length must be at least 3 characters long');
  }
};

const validateProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  validateName(name);
  validateAmount(amount);
  next();
};

export default validateProduct;