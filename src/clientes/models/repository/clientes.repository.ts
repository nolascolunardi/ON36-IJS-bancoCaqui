import { Injectable } from '@nestjs/common';
import { Cliente } from '../entity/cliente';
import { ClienteDatabase } from '../../data/clientes.database';

@Injectable()
export class ClienteRepository {
  private idCounter: number;
  private Clientes: Cliente[];

  constructor(private databaseClientes: ClienteDatabase) {
    this.Clientes = this.databaseClientes.database;
    this.idCounter = this.Clientes.length > 0 ? this.Clientes[this.Clientes.length - 1].idCliente + 1 : 1;
  }

  adicionarCliente(cliente: Cliente): void {
    cliente.setId(this.idCounter++);
    this.Clientes.push(cliente);
  }

  deletarCliente(index: number): void {
    this.Clientes.splice(index, 1);
  }

  findIndexById(id: number): number {
    return this.Clientes.findIndex((cliente) => cliente.idCliente === id);
  }

  getAllClientes(): Cliente[] {
    return this.Clientes;
  }
}
