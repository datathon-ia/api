import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Camera {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  lat: string

  @Column()
  lon: string
}
