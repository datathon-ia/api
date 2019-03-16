import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Camera } from '../camera/camera.entity'
import { Vehicle } from '../vehicle/vehicle.entity'

@Entity()
export class Accident {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @ManyToOne(type => Camera, {
    eager: true,
  })
  camera: Camera

  @ManyToMany(type => Vehicle, vehicle => vehicle.accidents, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  vehicles: Vehicle[]

  @CreateDateColumn({ select: false })
  createdAt: Date
}
