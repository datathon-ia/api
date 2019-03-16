import {
  Controller,
  Post,
  UseInterceptors,
  FileInterceptor,
  Body,
  ValidationPipe,
} from '@nestjs/common'
import { AccidentDto } from '../../common/dtos/accident.dto'
import { AccidentService } from '../../common/services/accident.service'

@Controller('accidents')
export class AccidentController {
  constructor(private readonly accidentService: AccidentService) {}

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
