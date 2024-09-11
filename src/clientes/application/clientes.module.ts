import { Module } from '@nestjs/common';
import { clientesProviders } from './clientes.providers';
import { ClientesController } from '../presenter/http/clientes.controller';

@Module({
  providers: clientesProviders,
  controllers: [ClientesController],
})
export class ClientesModule {}
