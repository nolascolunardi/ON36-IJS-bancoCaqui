import { ClientesController } from '../presenter/http/clientes.controller';
import { ViaCep } from '../adapters/viaCep';
import { ClienteRepository } from './ports/clientes.repository';
import { ClienteService } from './service/clientes.service';
import { ClienteFactory } from '../domain/factory/cliente.factory';
import { CepValidador } from './ports/cepValidador';
import { ClienteTypeOrmRepository } from '../infrastructure/database/clienteTypeOrm.repository';

export const clientesProviders = [
  ClienteService,
  {
    provide: ClienteRepository,
    useClass: ClienteTypeOrmRepository,
  },
  ClienteTypeOrmRepository,
  {
    provide: CepValidador,
    useClass: ViaCep,
  },
  ClienteFactory,
  ClientesController,
];
