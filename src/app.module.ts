import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/application/clientes.module';
import { GerentesModule } from './gerentes/application/gerentes.module';
import { ContasModule } from './contas/application/contas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSource from './config/db/data-source';
import { Cliente } from './clientes/domain/cliente.entity';
import { Gerente } from './gerentes/domain/gerente.entity';

@Module({
  imports: [
    ClientesModule,
    GerentesModule,
    ContasModule,
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Gerente, Cliente]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
