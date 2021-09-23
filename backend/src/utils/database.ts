import 'reflect-metadata';
import { Connection, createConnection, getConnection as getTypeormConnection } from 'typeorm';
import { Event } from '../models/event';
import { Organizator } from '../models/organizator';
import { Session } from '../models/session';
import { User } from '../models/user';
import { Vendor } from '../models/vendor';

let dbConnection: Connection | null = null;

const getConnection = async (): Promise<Connection> => {
  if (dbConnection) {
    return dbConnection;
  }

  return await createConnection({
    type: 'postgres',
    url: 'postgresql://postgres:vBU255@elKuKRePU@db.rypdushljuuibsanetzu.supabase.co:5432/postgres',
    entities: [Event, Organizator, Vendor, Session, User],
    synchronize: true,
    logging: 'all',
  }).then(
    (c) => {
      dbConnection = c;

      return c;
    },
    (e: Error) => {
      if (e.name === 'AlreadyHasActiveConnectionError') {
        dbConnection = getTypeormConnection();

        return dbConnection;
      }

      throw e;
    }
  );
};

export default getConnection;
