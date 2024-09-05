import { InMemoryGerenteDatabase } from '../infrastructure/persistence/in-memory.database';
import { InMemoryRepository } from '../infrastructure/persistence/in-memory.repository';
import { GerentesRepository } from './ports/gerentes.repository';
import { GerentesService } from './service/gerentes.service';
import { GerentesController } from '../presenter/http/gerentes.controller';
import { GerenteFactory } from '../domain/factory/gerente.factory';

export const gerentesProviders = [
  GerentesService,
  {
    provide: GerentesRepository,
    useClass: InMemoryRepository,
  },
  InMemoryGerenteDatabase,
  GerenteFactory,
  GerentesController,
];
