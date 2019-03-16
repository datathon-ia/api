import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator'

export class AccidentDto {
  @IsNotEmpty()
  @IsString()
  readonly cameraId: number

  @IsNotEmpty()
  @IsString()
  readonly image: string

  @IsOptional()
  @IsArray()
  readonly vehicleNames: string[]
}
