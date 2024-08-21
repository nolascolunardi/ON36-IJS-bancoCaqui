import { Cliente } from '../../domain/cliente';

export abstract class ClienteRepository {
  abstract salvar(cliente: Cliente): Cliente;
  abstract deletar(index: number): void;
  abstract listarTodos(): Cliente[];
}
