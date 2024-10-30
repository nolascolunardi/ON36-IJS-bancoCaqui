import { ContasController } from '../presenter/http/contas.controller';
import { ContasFactory } from '../domain/factories/contas.factory';
import { ContasRepository } from './ports/contas.repository';
import { ContasService } from './service/contas.service';
import { ContasTypeOrmRepository } from '../infrastructure/database/contasTypeOrm.repository';

export const contasProviders = [
  ContasService,
  {
    provide: ContasRepository,
    useClass: ContasTypeOrmRepository,
  },
  ContasTypeOrmRepository,
  ContasFactory,
  ContasController,
];
