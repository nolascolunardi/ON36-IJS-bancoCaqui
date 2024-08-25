import { Injectable } from '@nestjs/common';
import { Cliente } from '../../domain/cliente';
import { InMemoryRepository } from '../../infrastructure/persistence/in-memory.repository';
import { ViaCep } from '../../presenter/http/via-cep';

@Injectable()
export class ClienteService {
  constructor(
    private readonly clienteRepository: InMemoryRepository,
    private readonly cepValidador: ViaCep,
  ) {}

  async cadastrarCliente(nome: string, cpf: string, email: string, telefone: string, cep: string): Promise<Cliente> {
    if (!(await this.cepValidador.validarCep(cep))) {
      throw new Error('CEP inválido.');
    }
    if (!this.validarCPF(cpf)) {
      throw new Error('CPF já cadastrado.');
    }
    if (!this.validarEmail(email)) {
      throw new Error('Email já cadastrado.');
    }
    const novoCliente = new Cliente(nome, cpf, email, telefone, cep);
    return this.clienteRepository.salvar(novoCliente);
  }

  validarCPF(cpf: string): boolean {
    const clientes = this.clienteRepository.listarTodos();
    return !clientes.find((cliente) => cliente.cpf === cpf);
  }

  validarEmail(email: string): boolean {
    const clientes = this.clienteRepository.listarTodos();
    return !clientes.find((cliente) => cliente.email === email);
  }

  listarClientes(): Cliente[] {
    return this.clienteRepository.listarTodos();
  }

  deletarCliente(idCliente: number): void {
    const clientes = this.clienteRepository.listarTodos();
    const index = clientes.findIndex((cliente) => cliente.idCliente === idCliente);
    if (index === -1) {
      throw new Error(`Cliente com id ${idCliente} não encontrado.`);
    }
    this.clienteRepository.deletar(index);
  }
}
