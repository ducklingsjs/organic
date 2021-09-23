import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

export const loginBodyValidator = (req: Request, res: Response, next: NextFunction) => {
  let { email = '', password = '' } = req.body;
  const errorsValidation: Array<{ message: string; pointer: string }> = [];

  if (validator.isEmpty(email)) {
    errorsValidation.push({ message: 'Email is required', pointer: 'email' });
  }

  if (!validator.isEmail(email)) {
    errorsValidation.push({ message: 'Email is invalid', pointer: 'email' });
  }

  if (validator.isEmpty(password)) {
    errorsValidation.push({ message: 'Password is required', pointer: 'password' });
  }

  if (errorsValidation.length !== 0) {
    return next({
      data: null,
      errors: errorsValidation,
      status: 400,
    });
  }

  return next();
};
