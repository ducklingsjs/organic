import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Organizator } from '../../models/organizator';

import { User } from '../../models/user';
import { Vendor } from '../../models/vendor';
// import { User } from 'typeorm/entities/users/User';
// import { JwtPayload } from 'types/JwtPayload';
// import { createJwtToken } from 'utils/createJwtToken';
// import { CustomError } from 'utils/response/custom-error/CustomError';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const userRepository = getRepository(User);

  try {
    const user = await userRepository.findOne({ where: { email } });

    if (!user || user?.password !== password) {
      return next({
        data: null,
        errors: ['Invalid credentials'],
        status: 400,
      });
    }

    // @ts-ignore
    req.session.user = user;

    const { password: _, ...vendor } =
      (await getRepository(Vendor).findOne({ where: { email } })) || {};
    // @ts-ignore
    req.session.vendor = vendor;

    const { password: __, ...organizator } =
      (await getRepository(Organizator).findOne({ where: { email } })) || {};
    // @ts-ignore
    req.session.organizator = organizator;

    res.status(200).json({
      data: {
        id: req.session.id,
        organizator,
        vendor,
        guest: null,
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
