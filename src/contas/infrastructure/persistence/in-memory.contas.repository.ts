import { Injectable } from '@nestjs/common';
import { Conta } from '../../domain/contas';
import { ContasDatabase } from './contas.database';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';
import { ContasRepository } from '../../application/ports/contas.repository';

@Injectable()
export class InMemoryContasRepository extends ContasRepository {
  private idCounter: number;
  private Contas: Conta[];

  constructor(private databaseContas: ContasDatabase) {
    super();
    this.Contas = this.databaseContas.database;
    this.idCounter = this.Contas.length > 0 ? this.Contas[this.Contas.length - 1].idConta + 1 : 1;
  }

  salvar(conta: Conta): Conta {
    conta.setIdConta(this.idCounter++);
    this.Contas.push(conta);
    return conta;
  }

  deletar(conta: Conta): void {
    conta.setStatus(false);
  }

  atualizarSaldo(conta: Conta): Conta {
    const index = this.Contas.findIndex((c) => c.idConta === conta.idConta);
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
