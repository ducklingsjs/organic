import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Event } from './event';
import { Menu } from './menu';
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
  @JoinColumn()
  event!: Event;

  @Column('int')
  eventId!: number;

  @OneToMany(() => Order, (order) => order.vendor)
  orders!: Array<Order>;

  @OneToOne(() => Menu, (menu) => menu.vendor)
  menu!: Menu;
}
