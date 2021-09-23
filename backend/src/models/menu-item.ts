import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Menu } from './menu';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: number;

  @UpdateDateColumn()
  updated_at!: number;

  @Column('text', { unique: true })
  name!: string;

  @Column('text')
  description!: string;

  @Column('text')
  image!: string;

  @Column('int')
  price!: number;

  @Column('boolean')
  available!: boolean;

  @Column('boolean')
  adults_only!: boolean;

  @Column('int')
  menuId!: number;

  // @Column('int')
  // orderItemId!: number;

  @ManyToOne(() => Menu, (menu) => menu.menuItems)
  @JoinColumn()
  menu!: Menu;
}
