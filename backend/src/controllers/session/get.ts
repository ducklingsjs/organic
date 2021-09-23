import { Request, Response, NextFunction } from 'express';

export const read = async (req: Request, res: Response, next: NextFunction) => {
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

    res.status(200).json({
      data: {
        id: req.session.id,
        //@ts-ignore
        organizator: req.session.organizator,
        //@ts-ignore
        vendor: req.session.vendor,
        //@ts-ignore
        guest: req.session.guest,
      },
    });
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
