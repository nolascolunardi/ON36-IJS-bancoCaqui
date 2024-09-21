import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContasRepository } from '../../application/ports/contas.repository';
import { Conta } from '../../domain/conta.entity';
import { TipoConta } from '../../domain/enums/tiposConta.enum';

@Injectable()
export class ContasTypeOrmRepository implements ContasRepository {
  constructor(
    @InjectRepository(Conta)
    private readonly repository: Repository<Conta>,
  ) {}

  async salvar(conta: Conta): Promise<Conta> {
    return this.repository.save(conta);
  }

  async listarTodas(): Promise<Conta[]> {
    return this.repository.findBy({ isAtivo: true });
  }

  async deletar(conta: Conta): Promise<void> {
    conta.isAtivo = false;
    await this.repository.save(conta);
  }

  async atualizarSaldo(id: string, novoSaldo: number): Promise<void> {
    await this.repository.update(id, { saldo: novoSaldo });
  }

  async atualizarTipo(conta: Conta, tipoConta: TipoConta): Promise<Conta> {
    conta.tipoConta = tipoConta;
    return this.repository.save(conta);
  }

  async buscarContasCliente(clienteId: string): Promise<Conta | undefined> {
    return this.repository.findOne({ where: { cliente: clienteId, isAtivo: true } });
  }

  async buscarPorNumeroConta(numeroConta: string): Promise<Conta | undefined> {
    return this.repository.findOne({ where: { numeroConta, isAtivo: true } });
  }
}
