import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator'
import { Vehicle } from '../../resources/vehicle/vehicle.entity'

export class ContactDto {
  @IsNotEmpty()
  @IsNumber()
  readonly cameraId

  @IsNotEmpty()
  @IsString()
  readonly thumbnail: string

  @IsArray()
  readonly vehicle: Vehicle[]
}
