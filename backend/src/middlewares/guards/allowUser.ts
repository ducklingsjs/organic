import { Request, Response, NextFunction } from 'express';

export const allowUser = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  if (!req.session.user) {
    return next({
      data: null,
      errors: ['Not logged in'],
      status: 401,
    });
  }

  next();
};
