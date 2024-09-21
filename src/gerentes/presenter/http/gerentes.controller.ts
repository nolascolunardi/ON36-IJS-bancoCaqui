import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { GerentesService } from '../../application/service/gerentes.service';
import { CriarGerenteDto } from './dto/criar-gerente.dto';

@Controller('gerente')
export class GerentesController {
  constructor(private readonly GerentesService: GerenteService) {}

  @Post('/')
  cadastrar(@Body() criarGerenteDto: CriarGerenteDto) {
    return this.GerentesService.cadastrar(criarGerenteDto);
  }

  @Get('/')
  listarGerentes() {
    return this.GerentesService.listarGerentes();
  listarTodos() {
    return this.GerentesService.listarTodos();
  }

  @Get('/:registro')
  buscarPorEmail(@Param('registro') registro: string) {
    return this.GerentesService.buscarPorEmail(registro);
  }

  @Delete('deletar/:registro')
  deletarGerente(@Param('registro') registro: string) {
    return this.GerentesService.deletarGerente(registro);
  @Delete('/:registro')
  deletar(@Param('registro') registro: string) {
    return this.GerentesService.deletar(registro);
  }
}
