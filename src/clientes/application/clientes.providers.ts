import { InMemoryClientesDatabase } from '../infrastructure/persistence/in-memory.database';
import { InMemoryClienteRepository } from '../infrastructure/persistence/in-memory.repository';
import { ClientesController } from '../presenter/http/clientes.controller';
import { ViaCep } from '../../adapters/via-cep';
import { ClienteRepository } from './ports/clientes.repository';
import { ClienteService } from './service/clientes.service';
import { ClienteFactory } from '../domain/factory/cliente.factory';
import { CepValidador } from './ports/cep-validador';

export const clientesProviders = [
  ClienteService,
  {
    provide: ClienteRepository,
    useClass: InMemoryClienteRepository,
  },
  InMemoryClientesDatabase,
  {
    provide: CepValidador,
    useClass: ViaCep,
  },
  ClienteFactory,
  ClientesController,
];
