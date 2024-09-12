import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClienteService } from '../../application/service/clientes.service';
import { CriarClienteDto } from './dto/criarCliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly ClientesService: ClienteService) {}

  @Post('/cadastrar')
  cadastrarCliente(@Body() criarClienteDto: CriarClienteDto) {
    return this.ClientesService.cadastrarCliente(criarClienteDto);
  }

  @Get('/')
  listarClientes() {
    return this.ClientesService.listarClientes();
  }

  @Get('/:emailCliente')
  buscarCliente(@Param('emailCliente') emailCliente: string) {
    return this.ClientesService.buscarCliente(emailCliente);
  }

  @Delete('/deletar/:emailCliente')
  deletarCliente(@Param('emailCliente') emailCliente: string) {
    this.ClientesService.deletarCliente(emailCliente);
  }
}
