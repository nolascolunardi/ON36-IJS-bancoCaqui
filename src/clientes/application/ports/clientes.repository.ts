import { Cliente } from '../../domain/cliente.entity';

export abstract class ClienteRepository {
  abstract salvar(cliente: Cliente): Promise<Cliente>;
  abstract deletar(cliente: Cliente): Promise<void>;
  abstract listarTodos(): Promise<Cliente[]>;
  abstract buscarPorEmail(email: string): Promise<Cliente | undefined>;
  abstract buscarPorCPF(id: string): Promise<Cliente | undefined>;
}
