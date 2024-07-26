import { Module } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { ClientesController } from './clientes.controller';

@Module({
  providers: [ClienteService],
  controllers: [ClientesController]
})
export class ClientesModule {}
