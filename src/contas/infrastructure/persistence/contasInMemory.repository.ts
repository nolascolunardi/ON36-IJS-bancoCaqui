import { Injectable } from '@nestjs/common';
import { Conta } from '../../domain/conta';
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

  salvar(conta: Conta): Conta {
    this.Contas.push(conta);
    return conta;
  }

  deletar(conta: Conta): void {
    conta.isAtivo = false;
  }

  atualizarSaldo(conta: Conta): Conta {
    const index = this.Contas.findIndex((c) => c.id === conta.id);
    this.Contas[index] = conta;
    return conta;
  }

  atualizarTipo(conta: Conta, tipoConta: TipoConta): Conta {
    conta.tipoConta = tipoConta;
    return conta;
  }

  listarTodas(): Conta[] {
    return this.Contas;
  }
}
