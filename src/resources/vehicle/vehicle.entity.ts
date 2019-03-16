import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Accident } from '../accident/accident.entity'

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(type => Accident, accident => accident.vehicles)
  accident: Accident
}
