import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Event } from './event';
import { Order } from './order';
import { User } from './user';

@Entity()
export class Guest extends User {
  @Column('text', { select: false })
  password!: string;

  @Column('text')
  name!: string;

  @Column('int')
  age!: number;

  @OneToMany(() => Order, (order) => order.guest)
  orders!: Array<Order>;
}
