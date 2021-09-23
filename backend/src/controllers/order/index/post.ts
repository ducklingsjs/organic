import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Order } from '../../../models/order';
import { OrderItem } from '../../../models/order-item';

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { menuItemId } = req.body;

    const order = getRepository(Order).create({
      vendorId: 1,
      guestId: 1,
    });

    await getRepository(Order).insert(order);

    console.log(order);

    const orderItem = getRepository(OrderItem).create({
      menuItemId,
      orderId: order.id,
      quantity: 1,
    });

    await getRepository(OrderItem).insert(orderItem);

    console.log(orderItem);

    order.orderItems = [orderItem];

    res.status(200).json({
      data: order,
    });
  } catch (err) {
    console.log(err);
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
