import { Gerente } from '../../domain/gerente.entity';

export abstract class GerenteRepository {
  abstract salvar(gerente: Gerente): Promise<Gerente>;
  abstract deletar(gerente: Gerente): Promise<void>;
  abstract listarTodos(): Promise<Gerente[]>;
  abstract buscarPorRegistro(registro: string): Promise<Gerente | undefined>;
  abstract buscarPorEmail(email: string): Promise<Gerente | undefined>;
  abstract buscarPorCPF(id: string): Promise<Gerente | undefined>;
}
