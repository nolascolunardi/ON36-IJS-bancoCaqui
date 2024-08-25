import { Module } from '@nestjs/common';
import { ClienteService } from './service/clientes.service';
import { ClientesController } from '../presenter/http/clientes.controller';
import { ClienteDatabase } from '../infrastructure/persistence/clientes.database';
import { InMemoryRepository } from '../infrastructure/persistence/in-memory.repository';
import { ViaCep } from '../presenter/http/via-cep';

@Module({
  providers: [ClienteService, InMemoryRepository, ClienteDatabase, ViaCep],
  controllers: [ClientesController],
})
export class ClientesModule {}
