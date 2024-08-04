import { Injectable } from '@nestjs/common';
import { Gerente } from './models/entity/gerente';
import { GerenteRepository } from './models/repository/gerentes.repository';

@Injectable()
export class GerentesService {
  constructor(private readonly gerenteRepository: GerenteRepository) {}

  public createGerente(registro: string, nome: string, cpf: string, email: string, telefone: string): Gerente {
    const newGerente = new Gerente(registro, nome, cpf, email, telefone);
    this.gerenteRepository.addGerente(newGerente);
    return newGerente;
  }

  deletarGerente(registro: string): void {
    try {
      this.gerenteRepository.deletarGerente(registro);
      console.log(`Gerente deletado com sucesso.`);
    } catch (error) {
      console.log(error.message);
    }
  }
}
