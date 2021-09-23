import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { MenuItem } from '../../../models/menu-item';
import { Order } from '../../../models/order';
import { OrderItem } from '../../../models/order-item';

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
  const orderRepository = getRepository(Order);

  try {
    const id = req.params.id;
    const order = await orderRepository.findOne({ where: { id } });

    if (!order) {
      return next({
        data: null,
        errors: ['Not found'],
        status: 404,
      });
    }

    const orderItems = await getRepository(OrderItem).find({
      where: { orderId: order },
    });

    for await (const orderItem of orderItems) {
      const menuItem = await getRepository(MenuItem).findOne({
        where: { id: orderItem.menuItemId },
      });

      orderItem.menuItem = menuItem as MenuItem;
    }

    order.orderItems = orderItems;

    res.status(200).json(order);
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
