import { Module } from '@nestjs/common';
import { ContasService } from './service/contas.service';
import { ContasController } from '../presenter/http/contas.controller';
import { InMemoryContasRepository } from '../infrastructure/persistence/in-memory.contas.repository';
import { ContasFactory } from './factories/contas.factory';
import { ContasDatabase } from '../infrastructure/persistence/contas.database';

@Module({
  providers: [ContasService, InMemoryContasRepository, ContasFactory, ContasDatabase],
  controllers: [ContasController],
})
export class ContasModule {}
