import { Injectable } from '@nestjs/common';
import { Gerente } from './models/entity/gerente';
import { GerentesRepository } from './models/repository/gerentes.repository';

@Injectable()
export class GerentesService {
  constructor(private readonly gerenteRepository: GerentesRepository) {}

  cadastrarGerente(registro: string, nome: string, cpf: string, email: string, telefone: string): Gerente {
    if (!this.validarRegistro(registro)) {
      throw new Error('Registro inválido.');
    }

    if (!this.validarCPF(cpf)) {
      throw new Error('CPF já cadastrado.');
    }

    if (!this.validarEmail(email)) {
      throw new Error('Email já cadastrado.');
    }

    const novoGerente = new Gerente(registro, nome, cpf, email, telefone);
    this.gerenteRepository.adicionarGerente(novoGerente);
    return novoGerente;
  }

  validarCPF(cpf: string): boolean {
    const gerentes = this.gerenteRepository.getAllGerentes();
    return !gerentes.find((gerente) => gerente.cpf === cpf);
  }

  validarEmail(email: string): boolean {
    const gerentes = this.gerenteRepository.getAllGerentes();
    return !gerentes.find((gerente) => gerente.email === email);
  }

  validarRegistro(registro: string): boolean {
    const gerentes = this.gerenteRepository.getAllGerentes();
    return !gerentes.find((gerente) => gerente.registro === registro);
  }

  listarGerentes(): Gerente[] {
    return this.gerenteRepository.getAllGerentes();
  }

  deletarGerente(registro: string): Gerente[] {
    const index = this.gerenteRepository.findIndexByRegistro(registro);
    if (index === -1) {
      throw new Error(`Gerente com registro ${registro} não encontrado.`);
    }
    this.gerenteRepository.deletarGerente(index);
    return;
  }
}
