import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Gerente } from './models/entity/gerente';
import { GerentesService } from './gerentes.service';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly GerentesService: GerentesService) {}

  @Post('/cadastrar')
  cadastrarGerente(
    @Body('registro') registro: string,
    @Body('nome') nome: string,
    @Body('cpf') cpf: string,
    @Body('email') email: string,
    @Body('telefone') telefone: string,
  ): Gerente {
    try {
      return this.GerentesService.cadastrarGerente(registro, nome, cpf, email, telefone);
    } catch (error) {
      return error;
    }
  }

  @Get('/listar')
  listarGerentes(): Gerente[] {
    return this.GerentesService.listarGerentes();
  }

  @Delete('deletar/:registro')
  deletarGerente(@Param('registro') registro: string): string {
    try {
      this.GerentesService.deletarGerente(registro);
    } catch (error) {
      return error;
    }
    return 'Gerente deletado com sucesso.';
  }
}
