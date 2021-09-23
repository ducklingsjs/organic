import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Event } from './event';
import { Order } from './order';
import { User } from './user';

@Entity()
export class Vendor extends User {
  @Column('text', { select: false })
  password!: string;

  @Column('text', { unique: true })
  name!: string;

  @Column('text', { unique: true })
  event_location!: string;

  @ManyToOne(() => Event, (event) => event.vendors)
  event!: Array<Event>;

  @OneToMany(() => Order, (order) => order.vendor)
  orders!: Array<Order>;
}
