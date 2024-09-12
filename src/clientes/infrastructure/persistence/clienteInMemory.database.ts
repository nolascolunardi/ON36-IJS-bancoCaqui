import { Cliente } from '../../domain/cliente.entity';
export class InMemoryClientesDatabase {
  public database: Cliente[] = [
    new Cliente('002224e-0251jk', 'João', '12345678900', 'joao@ex.com', '11947474747', '08710000', '123456'),
    new Cliente('0144ee-kso2514', 'Maria', '98765432100', 'maria@ex.com', '11936363636', '08710000', '123456'),
  ];
}
