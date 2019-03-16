import {
  Controller,
  Post,
  UseInterceptors,
  FileInterceptor,
  Body,
  ValidationPipe,
} from '@nestjs/common'

@Controller('accidents')
export class AccidentController {
  // @Post()
  // // Empty interceptor prevent req.body to be empty. TODO: Refactor this.
  // @UseInterceptors(FileInterceptor(''))
  // async store(
  //   @Body(new ValidationPipe({ transform: true }))
  //   createCategoryDto: CreateUpdateCategoryDto,
  // ) {
  //   return await this.categoryService.store(createCategoryDto);
  // }
}
