import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../../../models/order';

export const updateOrderById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const order = await getRepository(Order).findOne({ where: { id } });

    if (!order) {
      return next({
        data: null,
        errors: ['Not found'],
        status: 404,
      });
    }

    const { status } = req.body;

    getRepository(Order).update(id, { status });

    res.status(200).json({
      ...order,
      status,
    });
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
