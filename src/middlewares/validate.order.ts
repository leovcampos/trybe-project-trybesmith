import { NextFunction, Request, Response } from 'express';
import ErrorHttp from './errorHttp';

const validateOrder = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    throw new ErrorHttp(400, '"productsIds" is required');
  }

  if (!Array.isArray(productsIds)) {
    throw new ErrorHttp(422, '"productsIds" must be an array');
  }

  const verifyIds = productsIds.every((element) => typeof element === 'number');
  if (productsIds.length === 0 || !verifyIds) {
    throw new ErrorHttp(422, '"productsIds" must include only numbers');
  }

  next();
};

export default validateOrder;
