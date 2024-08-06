import { Injectable } from '@nestjs/common';
import { Cliente } from './models/entity/cliente';
import { ClienteRepository } from './models/repository/clientes.repository';
@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  createCliente(nome: string, cpf: string, email: string, telefone: string, endereco: string): Cliente {
    const newCliente = new Cliente(nome, cpf, email, telefone, endereco);
    this.clienteRepository.addCliente(newCliente);
    return newCliente;
  }

  deletarCliente(idCliente: number): void {
    try {
      this.clienteRepository.deletarCliente(Number(idCliente));
    } catch (error) {
      console.log(error.message);
    }
  }
}
