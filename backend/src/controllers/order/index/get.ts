import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { MenuItem } from '../../../models/menu-item';
import { Order } from '../../../models/order';
import { OrderItem } from '../../../models/order-item';

export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await getRepository(Order).find({
      order: {
        created_at: -1,
      },
    });

    for await (const order of orders) {
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
    }

    res.status(200).json(orders);
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
