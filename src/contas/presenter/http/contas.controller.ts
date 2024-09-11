import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ContasService } from '../../application/service/contas.service';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';
import { AbrirContaDto } from './dto/abrir-conta.dto';
import { SacarDto } from './dto/sacar.dto';
import { DepositarDto } from './dto/depositar.dto';

@Controller('conta')
export class ContasController {
  constructor(private readonly contaService: ContasService) {}

  @Post('/abrir')
  abrir(@Body() abrirContaDto: AbrirContaDto) {
    return this.contaService.abrir(abrirContaDto);
  }

  @Delete(':numConta/fechar')
  fechar(@Param('numConta') numConta: string) {
    return this.contaService.fechar(numConta);
  }

  @Patch(':numConta/atualizarTipo')
  atualizarTipo(@Param('numConta') numConta: string, @Param('tipoConta') tipoConta: TipoConta) {
    return this.contaService.atualizarTipoConta(numConta, tipoConta);
  }

  @Get('/listar')
  listarTodas() {
    return this.contaService.listarTodas();
  }

  @Post(':numConta/depositar')
  depositar(@Param('numConta') numConta: string, @Body() depositarDto: DepositarDto) {
    return this.contaService.depositar(numConta, depositarDto);
  }

  @Post(':numConta/sacar')
  sacar(@Param('numConta') numConta: string, @Body() sacarDto: SacarDto) {
    return this.contaService.sacar(numConta, sacarDto);
  }
}
