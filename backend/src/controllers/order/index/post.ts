import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../../../models/order';

export const postOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = getRepository(Order).create();

    res.status(200).json({
      data: orders,
    });
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
