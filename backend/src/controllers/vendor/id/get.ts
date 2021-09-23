import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Menu } from '../../../models/menu';
import { MenuItem } from '../../../models/menu-item';
import { Vendor } from '../../../models/vendor';

export const getVendorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const vendor = await getRepository(Vendor).findOne({ where: { id } });

    if (!vendor) {
      return next({
        data: null,
        errors: ['Not found'],
        status: 404,
      });
    }

    vendor.menu = (await getRepository(Menu).findOne({ where: { vendorId: vendor.id } })) as Menu;

    vendor.menu.menuItems = await getRepository(MenuItem).find({
      where: { menuId: vendor.menu.id },
    });

    res.status(200).json({
      data: vendor,
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
