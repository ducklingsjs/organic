import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Event } from './event';
import { MenuItem } from './menu-item';
import { Organizator } from './organizator';

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

  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems!: Array<MenuItem>;

  @OneToOne(() => Event, (event) => event.menu)
  event!: Event;
}
