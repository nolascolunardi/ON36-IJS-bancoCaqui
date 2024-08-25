import { Module } from '@nestjs/common';
import { GerentesService } from './service/gerentes.service';
import { GerentesController } from '../presenter/http/gerentes.controller';
import { InMemoryRepository } from '../infrastructure/persistence/in-memory.repository';
import { GerentesDatabase } from '../infrastructure/persistence/gerentes.database';
import { ViaCep } from '../presenter/http/via-cep';

@Module({
  providers: [GerentesService, InMemoryRepository, GerentesDatabase, ViaCep],
  controllers: [GerentesController],
})
export class GerentesModule {}
