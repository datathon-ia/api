import { Injectable, NotFoundException } from '@nestjs/common'
import { AccidentDto } from '../dtos/accident.dto'
import { Accident } from '../../resources/accident/accident.entity'
import { getConnection } from 'typeorm'
import { Camera } from '../../resources/camera/camera.entity'
import { Vehicle } from '../../resources/vehicle/vehicle.entity'

@Injectable()
export class AccidentService {
  async index() {
    const accidentRepository = getConnection().getRepository(Accident)
    const accidents = await accidentRepository
      .createQueryBuilder('accident')
      .leftJoinAndSelect('accident.camera', 'camera')
      .leftJoinAndSelect('accident.vehicles', 'vehicles')
      .orderBy('accident.createdAt', 'DESC')
      .getMany()
    return accidents
  }

  async show(id: number): Promise<Accident> {
    const accidentRepository = getConnection().getRepository(Accident)
    const accident = await accidentRepository.findOne(id)
    if (!accident) {
      throw new NotFoundException()
    }
    return accident
  }

  async store(accidentDto: AccidentDto): Promise<Accident> {
    const accidentRepository = getConnection().getRepository(Accident)
    const accident: Accident = accidentRepository.create(accidentDto)

    // Add camera relationship
    accident.camera = await getConnection()
      .getRepository(Camera)
      .findOne(accidentDto.cameraId)

    await accidentRepository.save(accident)

    // Add vehicles relationship
    accident.vehicles = []
    const vehicleRepository = getConnection().getRepository(Vehicle)
    for (const vehicleName of accidentDto.vehicleNames) {
      const vehicle: Vehicle = vehicleRepository.create({
        name: vehicleName,
        accident,
      })
      await vehicleRepository.save(vehicle)
    }

    return accident
  }
}
