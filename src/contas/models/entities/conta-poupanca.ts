import { Conta } from './contas';
import { TipoConta } from '../../enums/tipos-conta.enum';

export class ContaPoupanca extends Conta {
  private readonly taxaRendimento: number;

  constructor(registroGerente: string, idCliente: number, numeroConta: string, saldo: number, taxaRendimento: number) {
    super(registroGerente, idCliente, numeroConta, TipoConta.POUPANCA, saldo);
    this.taxaRendimento = taxaRendimento;
  }

  public getTaxaRendimento(): number {
    return this.taxaRendimento;
  }

  public aplicarRendimento(): void {
    this.saldo += this.saldo * this.taxaRendimento;
  }
}
