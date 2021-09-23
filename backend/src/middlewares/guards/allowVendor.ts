import { Request, Response, NextFunction } from 'express';

export const allowVendor = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  if (!req.session.vendor) {
    return next({
      data: null,
      errors: ['Not logged in'],
      status: 401,
    });
  }

  next();
};
