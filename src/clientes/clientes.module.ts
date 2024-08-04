import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ClienteRepository } from './models/repository/clientes.repository';
@Module({
  providers: [ClienteService, ClienteRepository],
  controllers: [ClientesController],
})
export class ClientesModule {}
