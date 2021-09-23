import { Request, Response, NextFunction } from 'express';

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const user = req.session.user;

    if (!user) {
      return next({
        data: null,
        errors: ['Not logged in'],
        status: 401,
      });
    }

    //@ts-ignore
    delete req.session.user;

    //@ts-ignore
    delete req.session.vendor;

    //@ts-ignore
    delete req.session.guest;

    //@ts-ignore
    delete req.session.organizator;

    res.status(204).end();
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
