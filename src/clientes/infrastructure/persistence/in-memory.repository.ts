import { Injectable } from '@nestjs/common';
import { Cliente } from '../../domain/cliente';
import { InMemoryClientesDatabase } from './in-memory.database';
import { ClienteRepository } from '../../application/ports/clientes.repository';

@Injectable()
export class InMemoryClienteRepository extends ClienteRepository {
  private Clientes: Cliente[];

  constructor(private readonly databaseClientes: InMemoryClientesDatabase) {
    super();
    this.Clientes = this.databaseClientes.database;
  }

  salvar(cliente: Cliente): Cliente {
    this.Clientes.push(cliente);
    return cliente;
  }

  deletar(index: number): void {
    this.Clientes.splice(index, 1);
  }
  listarTodos(): Cliente[] {
    return this.Clientes;
  }
}
