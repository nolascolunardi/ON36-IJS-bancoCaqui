import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TipoConta } from '../contas/contas.model';
import { ClienteService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly ClientesService: ClienteService) {}

  @Post('/abrirConta')
  createConta(
    @Body('idCliente') idCliente: number,
    @Body('numeroConta') numeroConta: string,
    @Body('tipoConta') tipoConta: TipoConta,
    @Body('saldo') saldo: number,
  ) {
    return this.ClientesService.createConta(
      idCliente,
      numeroConta,
      tipoConta,
      saldo,
    );
  }

  @Patch('/alterarConta/:idCliente')
  updateTipoConta(
    @Param('idCliente') idCliente: number,
    @Body('tipoConta') tipoConta: TipoConta,
  ) {
    return this.ClientesService.updateTipo(idCliente, tipoConta);
  }

  @Delete('/fecharConta/:idCliente')
  closeConta(@Param('idCliente') idCliente: number): void {
    return this.ClientesService.closeConta(idCliente);
  }
}
