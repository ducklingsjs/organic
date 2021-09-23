import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Guest } from './guest';
import { OrderItem } from './order-item';
import { Organizator } from './organizator';
import { Vendor } from './vendor';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @CreateDateColumn()
  created_at!: number;

  @UpdateDateColumn()
  updated_at!: number;

  @Column('text', { unique: true })
  status!: 'todo' | 'process' | 'done';

  @ManyToOne(() => Vendor, (vendor) => vendor.orders)
  vendor!: Vendor;

  @ManyToOne(() => Guest, (guest) => guest.orders)
  guest!: Vendor;

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.order)
  orderItems!: Array<OrderItem>;
}
