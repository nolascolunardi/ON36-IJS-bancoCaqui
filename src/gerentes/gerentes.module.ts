import { Module } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { GerentesController } from './gerentes.controller';

@Module({
  providers: [GerentesService],
  controllers: [GerentesController],
})
export class GerentesModule {}
