import { Injectable } from '@nestjs/common';
import { Gerente } from '../../domain/gerente';
import { GerentesDatabase } from './gerentes.database';
import { GerentesRepository } from '../../application/ports/gerentes.repository';

@Injectable()
export class InMemoryRepository extends GerentesRepository {
  private idCounter: number;
  private Gerentes: Gerente[];

  constructor(private databaseGerentes: GerentesDatabase) {
    super();
    this.Gerentes = this.databaseGerentes.database;
    this.idCounter = this.Gerentes.length > 0 ? this.Gerentes[this.Gerentes.length - 1].idGerente + 1 : 1;
  }

  salvar(gerente: Gerente): Gerente {
    gerente.setId(this.idCounter++);
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
