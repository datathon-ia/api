import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Camera {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'float' })
  lat: number

  @Column({ type: 'float' })
  lon: number
}
