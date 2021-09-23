import { Column, Entity, OneToMany } from 'typeorm';
import { Event } from './event';
import { User } from './user';

@Entity()
export class Organizator extends User {
  @Column('text', { select: false })
  password!: string;

  @Column('text')
  name!: string;

  @OneToMany(() => Event, (event) => event.organizator)
  events!: Array<Event>;
}
