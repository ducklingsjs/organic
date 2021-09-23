import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MenuItem } from './menu-item';
import { Order } from './order';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: number;

  @UpdateDateColumn()
  updated_at!: number;

  @Column('int', { unique: true })
  quantity!: number;

  @ManyToOne(() => MenuItem)
  menuItem!: MenuItem;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order!: Order;
}
