import { GerenteRepository } from './ports/gerentes.repository';
import { GerenteService } from './service/gerentes.service';
import { GerentesController } from '../presenter/http/gerentes.controller';
import { GerenteTypeOrmRepository } from '../infrastructure/database/typeORM/gerenteTypeOrm.repository';
import { GerenteFactory } from '../domain/factory/gerente.factory';

export const gerentesProviders = [
  GerenteService,
  {
    provide: GerenteRepository,
    useClass: GerenteTypeOrmRepository,
  },
  GerenteTypeOrmRepository,
  GerenteFactory,
  GerentesController,
];
