import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../../domain/cliente.entity';
import { ClienteRepository } from '../../application/ports/clientes.repository';

@Injectable()
export class ClienteTypeOrmRepository implements ClienteRepository {
  constructor(
    @InjectRepository(Cliente)
    private readonly repository: Repository<Cliente>,
  ) {}

  async salvar(cliente: Cliente): Promise<Cliente> {
    return this.repository.save(cliente);
  }

  async listarTodos(): Promise<Cliente[]> {
    return this.repository.findBy({ isAtivo: true });
  }

  async deletar(cliente: Cliente): Promise<void> {
    cliente.isAtivo = false;
    await this.repository.save(cliente);
  }

  async buscarPorEmail(email: string): Promise<Cliente | undefined> {
    return this.repository.findOne({ where: { email, isAtivo: true } });
  }

  async buscarPorCPF(cpf: string): Promise<Cliente | undefined> {
    return this.repository.findOne({ where: { cpf, isAtivo: true } });
  }
}
