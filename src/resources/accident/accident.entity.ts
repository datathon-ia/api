import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { Camera } from '../camera/camera.entity'
import { Vehicle } from '../vehicle/vehicle.entity'

@Entity()
export class Accident {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'longtext' })
  image: string

  @Column({ type: 'tinyint' })
  closed: boolean

  @ManyToOne(type => Camera, {
    eager: true,
  })
  camera: Camera

  @OneToMany(type => Vehicle, vehicle => vehicle.accident, {
    cascade: true,
    eager: true,
  })
  vehicles: Vehicle[]

  @CreateDateColumn()
  createdAt: Date
}
