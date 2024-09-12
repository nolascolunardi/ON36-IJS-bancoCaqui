import { Module } from '@nestjs/common';
import { clientesProviders } from './clientes.providers';
import { ClientesController } from '../presenter/http/clientes.controller';
import { Cliente } from '../domain/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: clientesProviders,
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
})
export class ClientesModule {}
