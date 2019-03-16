import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import { Accident } from '../accident/accident.entity'

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(type => Accident, accident => accident.vehicles)
  accidents: Accident[]
}
