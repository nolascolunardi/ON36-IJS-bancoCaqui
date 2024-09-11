import { Conta } from './contas';
import { TipoConta } from './enums/tipos-conta.enum';

export class ContaCorrente extends Conta {
  private limiteCheque: number;

  constructor(registroGerente: string, idCliente: number, numeroConta: string) {
    super(registroGerente, idCliente, numeroConta, TipoConta.CORRENTE);
    this.limiteCheque = 100;
  }

  public getLimiteCheque(): number {
    return this.limiteCheque;
  }

  public setLimiteCheque(limiteCheque: number): void {
    this.limiteCheque = limiteCheque;
  }
}
