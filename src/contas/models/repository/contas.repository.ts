import { Injectable } from '@nestjs/common';
import { Conta } from '../entities/contas';
import { ContasDatabase } from '../../data/contas.database';
import { TipoConta } from '../../enums/tipos-conta.enum';

@Injectable()
export class ContasRepository {
  private idCounter: number;
  private Contas: Conta[];

  constructor(private databaseContas: ContasDatabase) {
    this.Contas = this.databaseContas.database;
    this.idCounter = this.Contas.length > 0 ? this.Contas[this.Contas.length - 1].idConta + 1 : 1;
  }

  adicionarConta(conta: Conta): void {
    conta.setIdConta(this.idCounter++);
    this.Contas.push(conta);
  }

  deletarConta(conta: Conta): void {
    conta.setStatus(false);
  }

  atualizarTipoDeConta(conta: Conta, tipoConta: TipoConta): Conta {
    conta.tipoConta = tipoConta;
    return conta;
  }

  findContabyNumeroConta(numConta: string): Conta {
    return this.Contas.find((conta) => conta.numeroConta === numConta);
  }

  getAllContas(tipoConta: TipoConta): Conta[] {
    return this.Contas.filter((conta) => conta.tipoConta === tipoConta);
  }

  depositar(conta: Conta, valor: number): Conta {
    conta.setSaldo(conta.getSaldo() + valor);
    return conta;
  }

  sacar(conta: Conta, valor: number): Conta {
    conta.setSaldo(conta.getSaldo() - valor);
    return conta;
  }
}
