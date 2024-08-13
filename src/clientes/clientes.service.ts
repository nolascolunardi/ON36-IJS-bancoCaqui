import { Injectable } from '@nestjs/common';
import { Cliente } from './models/entity/cliente';
import { ClienteRepository } from './models/repository/clientes.repository';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  cadastrarCliente(nome: string, cpf: string, email: string, telefone: string, endereco: string): Cliente {
    if (!this.validarCPF(cpf)) {
      throw new Error('CPF já cadastrado.');
    }
    if (!this.validarEmail(email)) {
      throw new Error('Email já cadastrado.');
    }
    const novoCliente = new Cliente(nome, cpf, email, telefone, endereco);
    this.clienteRepository.adicionarCliente(novoCliente);
    return novoCliente;
  }

  validarCPF(cpf: string): boolean {
    const clientes = this.clienteRepository.getAllClientes();
    return !clientes.find((cliente) => cliente.cpf === cpf);
  }

  validarEmail(email: string): boolean {
    const clientes = this.clienteRepository.getAllClientes();
    return !clientes.find((cliente) => cliente.email === email);
  }

  listarClientes(): Cliente[] {
    return this.clienteRepository.getAllClientes();
  }

  deletarCliente(idCliente: number): void {
    const index = this.clienteRepository.findIndexById(Number(idCliente));
    if (index === -1) {
      throw new Error(`Cliente com id ${idCliente} não encontrado.`);
    }
    this.clienteRepository.deletarCliente(index);
  }
}
