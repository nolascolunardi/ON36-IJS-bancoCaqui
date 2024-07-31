import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerentesModule } from './gerentes/gerentes.module';
import { ClientesModule } from './clientes/clientes.module';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [GerentesModule, ClientesModule, ContasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
