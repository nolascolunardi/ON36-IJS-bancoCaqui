import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Gerente } from './models/entity/gerente';
import { GerentesService } from './gerentes.service';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly GerentesService: GerentesService) {}

  @Post('/criar')
  createGerente(
    @Body('registro') registro: string,
    @Body('nome') nome: string,
    @Body('cpf') cpf: string,
    @Body('email') email: string,
    @Body('telefone') telefone: string,
  ): Gerente {
    return this.GerentesService.createGerente(registro, nome, cpf, email, telefone);
  }

  @Delete('deletar/:registro')
  deletarGerente(@Param('registro') registro: string): void {
    return this.GerentesService.deletarGerente(registro);
  }
}
