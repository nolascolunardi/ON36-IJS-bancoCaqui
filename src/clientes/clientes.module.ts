import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ClienteRepository } from './models/repository/clientes.repository';
import { ClienteDatabase } from './data/clientes.database';

@Module({
  providers: [ClienteService, ClienteRepository, ClienteDatabase],
  controllers: [ClientesController],
})
export class ClientesModule {}
