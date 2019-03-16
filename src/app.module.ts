import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AccidentController } from './resources/accident/accident.controller'
import { VehicleController } from './resources/vehicle/vehicle.controller'
import { CameraController } from './resources/camera/camera.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AccidentService } from './common/services/accident.service'
import { NotificationService } from './common/services/notification.service'

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [
    AppController,
    AccidentController,
    VehicleController,
    CameraController,
  ],
  providers: [AppService, AccidentService, NotificationService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
