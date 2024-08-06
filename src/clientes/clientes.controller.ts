import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ClienteService } from './clientes.service';
import { Cliente } from './models/entity/cliente';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly ClientesService: ClienteService) {}

  @Post('/cadastrar')
  createCliente(
    @Body('nome') nome: string,
    @Body('cpf') cpf: string,
    @Body('email') email: string,
    @Body('telefone') telefone: string,
    @Body('endereco') endereco: string,
  ): Cliente {
    return this.ClientesService.createCliente(nome, cpf, email, telefone, endereco);
  }

  @Delete('/deletar/:idCliente')
  deletarCliente(@Param('idCliente') idCliente: number): void {
    return this.ClientesService.deletarCliente(idCliente);
  }
}
