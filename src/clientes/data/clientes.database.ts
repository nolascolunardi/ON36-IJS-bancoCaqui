import { Cliente } from '../models/entity/cliente';
//apenas um banco de dados fictício com 2 clientes previamente cadastrados
export class ClienteDatabase {
  public database: Cliente[] = [
    new Cliente('João', '12345678900', 'joao@ex.com', '11947474747', 'Rua A, 123', 1),
    new Cliente('Maria', '98765432100', 'maria@ex.com', '11936363636', 'Rua B, 456', 2),
  ];
}
