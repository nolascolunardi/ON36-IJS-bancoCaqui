import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Gerente } from '../../domain/gerente.entity';
import { GerenteRepository } from '../ports/gerentes.repository';
import { CriarGerenteDto } from '../../presenter/http/dto/criarGerente.dto';
import { GerenteFactory } from '../../domain/factory/gerente.factory';

@Injectable()
export class GerenteService {
  constructor(
    private readonly gerenteRepository: GerenteRepository,
    private readonly gerenteFactory: GerenteFactory,
  ) {}

  async cadastrar(gerenteDto: CriarGerenteDto): Promise<Gerente> {
    await this.validarRegistro(gerenteDto.registro);
    await this.validarCPF(gerenteDto.cpf);
    await this.validarEmail(gerenteDto.email);

    const novoGerente = await this.gerenteFactory.criar(gerenteDto);
    return this.gerenteRepository.salvar(novoGerente);
  }

  async validarRegistro(registro: string): Promise<void> {
    const gerenteExiste = await this.gerenteRepository.buscarPorRegistro(registro);
    if (gerenteExiste) {
      throw new ConflictException('Registro já cadastrado.');
    }
  }

  async validarCPF(cpf: string): Promise<void> {
    const gerenteExiste = await this.gerenteRepository.buscarPorCPF(cpf);
    if (gerenteExiste) {
      throw new ConflictException('CPF já cadastrado.');
    }
  }

  async validarEmail(email: string): Promise<void> {
    const gerenteExiste = await this.gerenteRepository.buscarPorEmail(email);
    if (gerenteExiste) {
      throw new ConflictException('Email já cadastrado.');
    }
  }

  async listarTodos(): Promise<Gerente[]> {
    return await this.gerenteRepository.listarTodos();
  }

  async buscarPorEmail(emailGerente: string): Promise<Gerente> {
    const gerente = await this.gerenteRepository.buscarPorEmail(emailGerente);
    if (!gerente) {
      throw new NotFoundException('Gerente não encontrado.');
    }
    return gerente;
  }

  async deletar(emailGerente: string): Promise<void> {
    const gerente = await this.gerenteRepository.buscarPorEmail(emailGerente);
    if (!gerente) {
      throw new NotFoundException('Gerente não encontrado.');
    }
    await this.gerenteRepository.deletar(gerente);
  }
}
