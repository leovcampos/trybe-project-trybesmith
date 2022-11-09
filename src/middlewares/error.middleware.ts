import { NextFunction, Request, Response } from 'express';
import ErrorHttp from './errorHttp';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as ErrorHttp;

  res.status(status || 500).json({ message });
};

export default errorMiddleware;
