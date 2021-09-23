import { Request, Response, NextFunction } from 'express';
import { createQueryBuilder, getRepository } from 'typeorm';
import { Event } from '../../../../models/event';
import { Vendor } from '../../../../models/vendor';

export const getEventVendors = async (req: Request, res: Response, next: NextFunction) => {
  const vendorRepository = getRepository(Vendor);
  const eventsRepository = getRepository(Event);

  try {
    const eventId = req.params.event_id;

    const vendors = await vendorRepository.find({ where: { eventId: eventId } });

    if (!vendors) {
      return next({
        data: null,
        errors: ['Not found'],
        status: 404,
      });
    }

    res.status(200).json({
      data: vendors,
    });
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
