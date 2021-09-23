import session from 'express-session';
import { TypeormStore } from 'connect-typeorm';

import databaseConnect from '../utils/database';
import { Session } from '../models/session';

export const sessionMiddleware = async () => {
  const sessionRepository = (await databaseConnect()).getRepository(Session);

  return session({
    secret: 'organic-2021',
    resave: true,
    store: new TypeormStore({
      cleanupLimit: 2,
      ttl: 86400,
    }).connect(sessionRepository),
    saveUninitialized: true,
    name: 'organic-session',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      sameSite: false,
      secure: false,
      httpOnly: true,
      domain: 'localhost',
      path: '/',
    },
  });
};
