import { Injectable } from '@nestjs/common';
import { Gerente } from '../../domain/gerente.entity';
import { InMemoryGerenteDatabase } from './gerenteInMemory.database';
import { GerentesRepository } from '../../application/ports/gerentes.repository';

@Injectable()
export class GerenteInMemoryRepository extends GerentesRepository {
  private Gerentes: Gerente[];

  constructor(private databaseGerentes: InMemoryGerenteDatabase) {
    super();
    this.Gerentes = this.databaseGerentes.database;
  }

  async salvar(gerente: Gerente): Promise<Gerente> {
    this.Gerentes.push(gerente);
    return gerente;
  }

  async deletar(id: string): Promise<void> {}

  async listarTodos(): Promise<Gerente[]> {
    return this.Gerentes;
  }

  async buscarPorEmail(email: string): Promise<Gerente> {
    return this.Gerentes.find((gerente) => gerente.email === email);
  }

  async buscarPorRegistro(registro: string): Promise<Gerente> {
    return this.Gerentes.find((gerente) => gerente.registro === registro);
  }

  async buscarPorCPF(cpf: string): Promise<Gerente> {
    return this.Gerentes.find((gerente) => gerente.cpf === cpf);
  }
}
