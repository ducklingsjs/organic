import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Organizator } from './organizator';
import { Vendor } from './vendor';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: number;

  @UpdateDateColumn()
  updated_at!: number;

  @Column('text', { unique: true })
  name!: string;

  @Column('text')
  location!: string;

  @Column('text')
  description!: string;

  @Column('text')
  image!: string;

  @Column('int')
  entry_fee!: string;

  @Column('timestamptz')
  startTime!: Date;

  @Column('timestamptz')
  endTime!: Date;

  @OneToMany(() => Vendor, (vendor) => vendor.event)
  vendors!: Array<Vendor>;

  @ManyToOne(() => Organizator, (organizator) => organizator.events)
  organizator!: Array<Organizator>;
}
