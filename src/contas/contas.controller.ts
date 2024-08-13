import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ContasService } from './contas.service';
import { TipoConta } from './enums/tipos-conta.enum';

@Controller('contas')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  @Post('/abrirConta')
  abrirConta(
    @Body('TipoConta') tipoConta: TipoConta,
    @Body('registroGerente') registroGerente: string,
    @Body('idCliente') idCliente: number,
    @Body('numeroConta') numeroConta: string,
    @Body('saldo') saldo: number,
  ) {
    try {
      return this.contaService.abrirConta(tipoConta, registroGerente, idCliente, numeroConta, saldo);
    } catch (error) {
      return error.message;
    }
  }

  @Delete('/fecharConta/:numeroConta')
  fecharConta(@Param('numeroConta') numeroConta: string) {
    try {
      return this.contaService.fecharConta(numeroConta);
    } catch (error) {
      return error.message;
    }
  }

  @Patch('/atualizar/tipoDeConta/:numeroConta/:tipoConta')
  atualizarTipoDeConta(@Param('numeroConta') numeroConta: string, @Param('tipoConta') tipoConta: TipoConta) {
    try {
      return this.contaService.atualizarTipoDeConta(numeroConta, tipoConta);
    } catch (error) {
      return error.message;
    }
  }

  @Get('/listarContas/:tipoConta')
  listarContas(@Param('tipoConta') tipoConta: TipoConta) {
    return this.contaService.listarContas(tipoConta);
  }

  @Post('/depositar/:numeroConta/:valor')
  depositar(@Param('numeroConta') numeroConta: string, @Param('valor') valor: number) {
    try {
      return this.contaService.depositar(numeroConta, valor);
    } catch (error) {
      return error.message;
    }
  }

  @Post('/sacar/:numeroConta/:valor')
  sacar(@Param('numeroConta') numeroConta: string, @Param('valor') valor: number) {
    try {
      return this.contaService.sacar(numeroConta, valor);
    } catch (error) {
      return error.message;
    }
  }
}
