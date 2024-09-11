import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { GerentesService } from '../../application/service/gerentes.service';
import { CriarGerenteDto } from './dto/criar-gerente.dto';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly GerentesService: GerentesService) {}

  @Post('/cadastrar')
  cadastrarGerente(@Body() criarGerenteDto: CriarGerenteDto) {
    return this.GerentesService.cadastrarGerente(criarGerenteDto);
  }

  @Get('/')
  listarGerentes() {
    return this.GerentesService.listarGerentes();
  }

  @Delete('deletar/:registro')
  deletarGerente(@Param('registro') registro: string) {
    return this.GerentesService.deletarGerente(registro);
  }
}
