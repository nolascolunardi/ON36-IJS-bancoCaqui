import { Injectable } from '@nestjs/common';
import { Gerente } from '../../domain/gerente';
import { InMemoryRepository } from '../../infrastructure/persistence/in-memory.repository';
import { ViaCep } from '../../presenter/http/via-cep';

@Injectable()
export class GerentesService {
  constructor(
    private readonly gerenteRepository: InMemoryRepository,
    private readonly cepValidador: ViaCep,
  ) {}

  cadastrarGerente(registro: string, nome: string, cpf: string, email: string, telefone: string, cep: string): Gerente {
    if (!this.cepValidador.validarCep(cep)) {
      throw new Error('CEP inválido.');
    }

    if (!this.validarRegistro(registro)) {
      throw new Error('Registro inválido.');
    }

    if (!this.validarCPF(cpf)) {
      throw new Error('CPF já cadastrado.');
    }

    if (!this.validarEmail(email)) {
      throw new Error('Email já cadastrado.');
    }

    const novoGerente = new Gerente(registro, nome, cpf, email, telefone, cep);
    this.gerenteRepository.salvar(novoGerente);
    return novoGerente;
  }

  validarCPF(cpf: string): boolean {
    const gerentes = this.gerenteRepository.listarTodos();
    return !gerentes.find((gerente) => gerente.cpf === cpf);
  }

  validarEmail(email: string): boolean {
    const gerentes = this.gerenteRepository.listarTodos();
    return !gerentes.find((gerente) => gerente.email === email);
  }

  validarRegistro(registro: string): boolean {
    const gerentes = this.gerenteRepository.listarTodos();
    return !gerentes.find((gerente) => gerente.registro === registro);
  }

  listarGerentes(): Gerente[] {
    return this.gerenteRepository.listarTodos();
  }

  deletarGerente(registro: string): Gerente[] {
    const alunos = this.gerenteRepository.listarTodos();
    const index = alunos.findIndex((gerente) => gerente.registro === registro);
    if (index === -1) {
      throw new Error(`Gerente com registro ${registro} não encontrado.`);
    }
    this.gerenteRepository.deletar(index);
    return;
  }
}
