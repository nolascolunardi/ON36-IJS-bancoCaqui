import { Injectable } from '@nestjs/common';
import { Cliente } from '../../domain/cliente';
import { ClienteDatabase } from './clientes.database';
import { ClienteRepository } from '../../application/ports/clientes.repository';

@Injectable()
export class InMemoryRepository extends ClienteRepository {
  private idCounter: number;
  private Clientes: Cliente[];

  constructor(private databaseClientes: ClienteDatabase) {
    super();
    this.Clientes = this.databaseClientes.database;
    this.idCounter = this.Clientes.length > 0 ? this.Clientes[this.Clientes.length - 1].idCliente + 1 : 1;
  }

  salvar(cliente: Cliente): Cliente {
    cliente.setId(this.idCounter++);
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
