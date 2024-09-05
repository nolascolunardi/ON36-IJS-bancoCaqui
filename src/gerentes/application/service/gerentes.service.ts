import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Gerente } from '../../domain/gerente';
import { GerentesRepository } from '../ports/gerentes.repository';
import { CriarGerenteDto } from '../../presenter/http/dto/criar-gerente.dto';
import { GerenteFactory } from '../../domain/factory/gerente.factory';

@Injectable()
export class GerentesService {
  constructor(
    private readonly gerenteRepository: GerentesRepository,
    private readonly gerenteFactory: GerenteFactory,
  ) {}

  async cadastrarGerente(criarGerenteDto: CriarGerenteDto): Promise<Gerente> {
    this.validarRegistro(criarGerenteDto.registro);
    this.validarCPF(criarGerenteDto.cpf);
    this.validarEmail(criarGerenteDto.email);

    const novoGerente = this.gerenteFactory.criarGerente(criarGerenteDto);

    return this.gerenteRepository.salvar(novoGerente);
  }

  validarCPF(cpf: string): void {
    const gerentes = this.gerenteRepository.listarTodos();
    const gerenteEncontrado = gerentes.find((gerente) => gerente.cpf === cpf);
    if (gerenteEncontrado) {
      throw new ForbiddenException(`CPF inválido.`);
    }
  }

  validarEmail(email: string): void {
    const gerentes = this.gerenteRepository.listarTodos();
    const gerenteEncontrado = gerentes.find((gerente) => gerente.email === email);
    if (gerenteEncontrado) {
      throw new ConflictException(`Email inválido.`);
    }
  }

  validarRegistro(registro: string): void {
    const gerentes = this.gerenteRepository.listarTodos();
    const gerenteEncontrado = gerentes.find((gerente) => gerente.registro === registro);
    if (gerenteEncontrado) {
      throw new ConflictException(`Registro inválido.`);
    }
  }

  async listarGerentes(): Promise<Gerente[]> {
    return this.gerenteRepository.listarTodos();
  }

  async deletarGerente(registro: string): Promise<string> {
    const index = this.buscarGerentePorRegistro(registro);
    this.gerenteRepository.deletar(index);
    return 'Excluido com sucesso';
  }

  buscarGerentePorRegistro(registro: string): number {
    const gerentes = this.gerenteRepository.listarTodos();
    const index = gerentes.findIndex((gerente) => gerente.registro === registro);
    if (index === -1) {
      throw new NotFoundException('gerente', 'Gerente com registro não encontrado.');
    }
    return index;
  }
}
