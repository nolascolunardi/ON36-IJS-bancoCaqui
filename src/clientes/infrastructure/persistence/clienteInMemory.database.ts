import { Cliente } from '../../domain/cliente.entity';
import { randomUUID } from 'crypto';
export class InMemoryClientesDatabase {
  public database: Cliente[] = [
    new Cliente(randomUUID(), 'joao', '01234567890', 'joao@ex.com', 'joao1234', '11474548520', '08710000', '123456'),
    new Cliente(randomUUID(), 'maria', '98765432100', 'maria@ex.com', 'maria123', '11235654895', '08710000', '123456'),
  ];
}
