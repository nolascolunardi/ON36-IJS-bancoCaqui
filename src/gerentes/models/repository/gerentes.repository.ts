import { Injectable } from '@nestjs/common';
import { Gerente } from '../entity/gerente';
import { GerentesDatabase } from '../../data/gerentes.database';

@Injectable()
export class GerentesRepository {
  private idCounter: number;
  private Gerentes: Gerente[];

  constructor(private databaseGerentes: GerentesDatabase) {
    this.Gerentes = this.databaseGerentes.database;
    this.idCounter = this.Gerentes.length > 0 ? this.Gerentes[this.Gerentes.length - 1].idGerente + 1 : 1;
  }

  adicionarGerente(gerente: Gerente): void {
    gerente.setId(this.idCounter++);
    this.Gerentes.push(gerente);
  }

  deletarGerente(index: number): void {
    this.Gerentes.splice(index, 1);
  }

  findIndexByRegistro(registro: string): number {
    return this.Gerentes.findIndex((gerente) => gerente.registro === registro);
  }

  getAllGerentes(): Gerente[] {
    return this.Gerentes;
  }
}
