import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Event } from '../../../models/event';

export const getEvent = async (req: Request, res: Response, next: NextFunction) => {
  const eventRepository = getRepository(Event);

  try {
    const id = req.params.event_id;

    const event = await eventRepository.findOne({ where: { id } });

    if (!event) {
      return next({
        data: null,
        errors: ['Not found'],
        status: 404,
      });
    }

    res.status(200).json({
      data: event,
    });
  } catch (err) {
    console.log({ err });
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
