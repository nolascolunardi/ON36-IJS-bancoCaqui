import { Cliente } from '../entity/cliente';
import * as fs from 'fs';
import * as path from 'path';

export class ClienteRepository {
  private readonly filePathCliente = path.resolve('src/clientes/data/clientes.json');
  private idCounter: number;

  constructor() {
    const clientes = this.readClientes();
    this.idCounter = clientes.length > 0 ? clientes[clientes.length - 1].idCliente + 1 : 1;
  }

  private readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePathCliente, 'utf-8');
    return JSON.parse(data) as Cliente[];
  }
  private writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePathCliente, JSON.stringify(clientes, null, 2), 'utf-8');
  }

  addCliente(cliente: Cliente): void {
    cliente.setIdCliente(this.idCounter);
    const listaClientes = this.readClientes();
    listaClientes.push(cliente);
    this.writeClientes(listaClientes);
  }

  deletarCliente(idCliente: number): void {
    const listaClientes = this.readClientes();
    const index = this.findIndexById(idCliente, listaClientes);
    if (index === -1) {
      throw new Error(`Cliente com id ${idCliente} não encontrado.`);
    }
    listaClientes.splice(index, 1);
    this.writeClientes(listaClientes);
  }

  findIndexById(id: number, listaClientes: Cliente[]): number {
    return listaClientes.findIndex((cliente) => cliente.idCliente === id);
  }
}
