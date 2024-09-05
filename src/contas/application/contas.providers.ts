import { ContasDatabase } from '../infrastructure/persistence/contas.database';
import { InMemoryContasRepository } from '../infrastructure/persistence/in-memory.contas.repository';
import { ContasController } from '../presenter/http/contas.controller';
import { ContasFactory } from '../domain/factories/contas.factory';
import { ContasRepository } from './ports/contas.repository';
import { ContasService } from './service/contas.service';

export const contasProviders = [
  ContasService,
  {
    provide: ContasRepository,
    useClass: InMemoryContasRepository,
  },
  ContasDatabase,
  ContasFactory,
  ContasController,
];
