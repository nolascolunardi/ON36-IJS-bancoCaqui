import { Body, Delete, Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClienteService } from '../../application/service/clientes.service';
import { CriarClienteDto } from './dto/criar-cliente.dto';

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

  @Delete('/deletar/:emailCliente')
  deletarCliente(@Param('emailCliente') emailCliente: string) {
    this.ClientesService.deletarCliente(emailCliente);
  }
}
