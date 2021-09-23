import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Event } from '../../../models/event';

export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  const eventRepository = getRepository(Event);

  try {
    const events = await eventRepository.find();

    res.status(200).json({
      data: events,
    });
  } catch (err) {
    return next({
      data: null,
      errors: ['Something went wrong'],
      status: 500,
    });
  }
};
