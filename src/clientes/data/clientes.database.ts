import { Cliente } from '../models/entity/cliente';
//apenas um banco de dados fictício com 2 clientes previamente cadastrados
export class ClienteDatabase {
  public database: Cliente[] = [
    new Cliente('João', '123.456.789-00', 'joao@ex.com', '123456789', 'Rua A, 123', 1),
    new Cliente('Maria', '987.654.321-00', 'maria@ex.com', '987654321', 'Rua B, 456', 2),
  ];
}
