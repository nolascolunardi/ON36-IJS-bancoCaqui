import { Module } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { GerentesController } from './gerentes.controller';
import { GerenteRepository } from './models/repository/gerentes.repository';

@Module({
  providers: [GerentesService, GerenteRepository],
  controllers: [GerentesController],
})
export class GerentesModule {}
