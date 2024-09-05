import { Injectable } from '@nestjs/common';
import { Gerente } from '../../domain/gerente';
import { InMemoryGerenteDatabase } from './in-memory.database';
import { GerentesRepository } from '../../application/ports/gerentes.repository';

@Injectable()
export class InMemoryRepository extends GerentesRepository {
  private Gerentes: Gerente[];

  constructor(private databaseGerentes: InMemoryGerenteDatabase) {
    super();
    this.Gerentes = this.databaseGerentes.database;
  }

  salvar(gerente: Gerente): Gerente {
    this.Gerentes.push(gerente);
    return gerente;
  }

  deletar(index: number): void {
    this.Gerentes.splice(index, 1);
  }

  listarTodos(): Gerente[] {
    return this.Gerentes;
  }
}
