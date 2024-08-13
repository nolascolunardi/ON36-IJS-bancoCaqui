import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { ContasRepository } from './models/repository/contas.repository';
import { ContasFactory } from './factories/contas.factory';
import { ContasDatabase } from './data/contas.database';

@Module({
  providers: [ContasService, ContasRepository, ContasFactory, ContasDatabase],
  controllers: [ContasController],
})
export class ContasModule {}
