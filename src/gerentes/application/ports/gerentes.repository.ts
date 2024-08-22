import { Gerente } from '../../domain/gerente';

export abstract class GerentesRepository {
  abstract salvar(gerente: Gerente): Gerente;
  abstract deletar(index: number): void;
  abstract listarTodos(): Gerente[];
}
