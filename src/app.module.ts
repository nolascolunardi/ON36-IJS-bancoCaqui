import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { GerentesModule } from './gerentes/gerentes.module';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [ClientesModule, UsuariosModule, GerentesModule, ContasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
