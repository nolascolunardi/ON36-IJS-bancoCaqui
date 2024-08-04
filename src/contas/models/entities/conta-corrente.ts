import { Conta } from './contas';
import { TipoConta } from '../../enums/tipos-conta.enum';

export class ContaCorrente extends Conta {
  private limiteCheque: number = 100;

  constructor(registroGerente: string, idCliente: number, numeroConta: string, saldo: number, limiteCheque: number) {
    super(registroGerente, idCliente, numeroConta, TipoConta.CORRENTE, saldo);
    this.limiteCheque = limiteCheque;
  }

  public getLimiteCheque(): number {
    return this.limiteCheque;
  }

  public setLimiteCheque(limiteCheque: number): void {
    this.limiteCheque = limiteCheque;
  }
}
