import { Module } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { GerentesController } from './gerentes.controller';
import { GerentesRepository } from './models/repository/gerentes.repository';
import { GerentesDatabase } from './data/gerentes.database';

@Module({
  providers: [GerentesService, GerentesRepository, GerentesDatabase],
  controllers: [GerentesController],
})
export class GerentesModule {}
