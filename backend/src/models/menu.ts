import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MenuItem } from './menu-item';
import { Vendor } from './vendor';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: number;

  @UpdateDateColumn()
  updated_at!: number;

  @Column('text')
  description!: string;

  @Column('int')
  vendorId!: number;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems!: Array<MenuItem>;

  @OneToOne(() => Vendor, (vendor) => vendor.menu)
  vendor!: Vendor;
}
