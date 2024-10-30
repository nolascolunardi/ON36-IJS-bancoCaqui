import { Injectable } from '@nestjs/common';
import { Cliente } from '../../domain/cliente.entity';
import { InMemoryClientesDatabase } from './clienteInMemory.database';
import { ClienteRepository } from '../../application/ports/clientes.repository';

@Injectable()
export class ClienteInMemoryRepository extends ClienteRepository {
  private Clientes: Cliente[];

  constructor(private readonly databaseClientes: InMemoryClientesDatabase) {
    super();
    this.Clientes = this.databaseClientes.database;
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    this.Clientes.push(cliente);
    return cliente;
  }

  async deletar(cliente: Cliente): Promise<void> {
    cliente.isAtivo = false;
  }
  async listarTodos(): Promise<Cliente[]> {
    return this.Clientes;
  }
  async buscarPorEmail(email: string): Promise<Cliente> {
    return this.Clientes.find((cliente) => cliente.email === email);
  }
  async buscarPorCPF(cpf: string): Promise<Cliente> {
    return this.Clientes.find((cliente) => cliente.cpf === cpf);
  }
}
