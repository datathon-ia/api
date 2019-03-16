import {
  Controller,
  Post,
  UseInterceptors,
  FileInterceptor,
  Body,
  ValidationPipe,
  Get,
  Param,
} from '@nestjs/common'
import { AccidentDto } from '../../common/dtos/accident.dto'
import { AccidentService } from '../../common/services/accident.service'
import { Accident } from './accident.entity'

@Controller('accidents')
export class AccidentController {
  constructor(private readonly accidentService: AccidentService) {}

  @Get()
  async index(): Promise<Accident[]> {
    return await this.accidentService.index()
  }

  @Get('/:id')
  public async show(@Param() id: number) {
    return await this.accidentService.show(id)
  }

  @Post()
  // Empty interceptor prevent req.body to be empty. TODO: Refactor this.
  @UseInterceptors(FileInterceptor(''))
  async store(
    @Body(new ValidationPipe({ transform: true }))
    accidentDto: AccidentDto,
  ) {
    return this.accidentService.store(accidentDto)
  }
}
