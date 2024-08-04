import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ContasService } from './contas.service';
import { TipoConta } from './enums/tipos-conta.enum';

@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  @Post('/abrirConta')
  openConta(
    @Body('TipoConta') tipoConta: TipoConta,
    @Body('registroGerente') registroGerente: string,
    @Body('idCliente') idCliente: number,
    @Body('numeroConta') numeroConta: string,
    @Body('saldo') saldo: number,
  ) {
    return this.contaService.openConta(tipoConta, registroGerente, idCliente, numeroConta, saldo);
  }
}
