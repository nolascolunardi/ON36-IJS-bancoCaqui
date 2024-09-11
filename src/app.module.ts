import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/application/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { GerentesModule } from './gerentes/application/gerentes.module';
import { ContasModule } from './contas/application/contas.module';

@Module({
  imports: [ClientesModule, GerentesModule, ContasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
