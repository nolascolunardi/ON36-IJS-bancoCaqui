import { GerenteRepository } from '../../../application/ports/gerentes.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Gerente } from '../../../domain/gerente.entity';

@Injectable()
export class GerenteTypeOrmRepository implements GerenteRepository {
  constructor(
    @InjectRepository(Gerente)
    private readonly repository: Repository<Gerente>,
  ) {}

  async salvar(gerente: Gerente): Promise<Gerente> {
    return this.repository.save(gerente);
  }

  async listarTodos(): Promise<Gerente[]> {
    return this.repository.find();
  }

  async deletar(gerente: Gerente): Promise<void> {
    gerente.isAtivo = false;
    await this.repository.save(gerente);
  }

  async buscarPorEmail(email: string): Promise<Gerente | undefined> {
    return this.repository.findOne({ where: { email, isAtivo: true } });
  }

  async buscarPorCPF(cpf: string): Promise<Gerente | undefined> {
    return this.repository.findOne({ where: { cpf, isAtivo: true } });
  }
  async buscarPorRegistro(registro: string): Promise<Gerente | undefined> {
    return this.repository.findOne({ where: { registro, isAtivo: true } });
  }
}
