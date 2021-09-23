import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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
  @JoinColumn()
  menuItem!: MenuItem;

  @Column('int')
  menuItemId!: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order!: Order;

  @Column('int')
  orderId!: number;
}
