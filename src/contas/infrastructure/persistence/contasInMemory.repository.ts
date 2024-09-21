import { Injectable } from '@nestjs/common';
import { Conta } from '../../domain/conta.entity';
import { ContasInMemoryDatabase } from './contasInMemory.database';
import { TipoConta } from '../../domain/enums/tiposConta.enum';
import { ContasRepository } from '../../application/ports/contas.repository';

@Injectable()
export class ContasInMemoryRepository extends ContasRepository {
  private idCounter: number;
  private Contas: Conta[];

  constructor(private databaseContas: ContasInMemoryDatabase) {
    super();
    this.Contas = this.databaseContas.database;
  }

  async salvar(conta: Conta): Promise<Conta> {
    this.Contas.push(conta);
    return conta;
  }

  async deletar(conta: Conta): Promise<void> {
    conta.isAtivo = false;
  }

  async atualizarSaldo(id: string, saldoAtual: number): Promise<void> {
    const index = this.Contas.findIndex((c) => c.id === id);
    this.Contas[index].saldo = saldoAtual;
  }

  async atualizarTipo(conta: Conta, tipoConta: TipoConta): Promise<Conta> {
    conta.tipoConta = tipoConta;
    return conta;
  }

  async listarTodas(): Promise<Conta[]> {
    return this.Contas;
  }

  async buscarPorNumeroConta(numeroConta: string): Promise<Conta | undefined> {
    return this.Contas.find((c) => c.numeroConta === numeroConta);
  }

  async buscarContasCliente(clienteId: string): Promise<Conta | undefined> {
    return this.Contas.find((c) => c.id === clienteId);
  }
}
