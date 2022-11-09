import { NextFunction, Request, Response } from 'express';
import ErrorHttp from './errorHttp';

const validateUsername = (username: unknown): void => {
  if (username === undefined) {
    throw new ErrorHttp(400, '"username" is required');
  }

  if (typeof username !== 'string') {
    throw new ErrorHttp(422, '"username" must be a string');
  }

  if (username.length < 3) {
    throw new ErrorHttp(422, '"username" length must be at least 3 characters long');
  }
};

const validateClasse = (classe: unknown): void => {
  if (classe === undefined) {
    throw new ErrorHttp(400, '"classe" is required');
  } 

  if (typeof classe !== 'string') {
    throw new ErrorHttp(422, '"classe" must be a string');
  } 

  if (classe.length < 3) {
    throw new ErrorHttp(422, '"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: unknown): void => {
  if (level === undefined) {
    throw new ErrorHttp(400, '"level" is required');
  } 
  
  if (typeof level !== 'number') {
    throw new ErrorHttp(422, '"level" must be a number');
  } 

  if (level < 1) {
    throw new ErrorHttp(422, '"level" must be greater than or equal to 1');
  }
};

const validatePassword = (password: unknown): void => {
  if (password === undefined) {
    throw new ErrorHttp(400, '"password" is required');
  } 
  
  if (typeof password !== 'string') {
    throw new ErrorHttp(422, '"password" must be a string');
  } 

  if (password.length < 8) {
    throw new ErrorHttp(422, '"password" length must be at least 8 characters long');
  }
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, classe, level } = req.body;
  validateUsername(username);
  validatePassword(password);
  validateClasse(classe);
  validateLevel(level);

  next();
};

export default validateUser;
