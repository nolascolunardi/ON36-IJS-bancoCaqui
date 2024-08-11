import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { Cliente } from './models/entity/cliente';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly ClientesService: ClienteService) {}

  @Post('/cadastrar')
  cadastrarCliente(
    @Body('nome') nome: string,
    @Body('cpf') cpf: string,
    @Body('email') email: string,
    @Body('telefone') telefone: string,
    @Body('endereco') endereco: string,
  ): Cliente {
    try {
      return this.ClientesService.cadastrarCliente(nome, cpf, email, telefone, endereco);
    } catch (error) {
      return error;
    }
  }

  @Get('/listar')
  listarClientes(): Cliente[] {
    return this.ClientesService.listarClientes();
  }

  @Delete('/deletar/:idCliente')
  deletarCliente(@Param('idCliente') idCliente: number): string {
    try {
      this.ClientesService.deletarCliente(idCliente);
    } catch (error) {
      return error;
    }
    return 'Cliente deletado com sucesso.';
  }
}
