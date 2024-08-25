import { Conta } from './contas';
import { TipoConta } from './enums/tipos-conta.enum';

export class ContaPoupanca extends Conta {
  private readonly taxaRendimento: number;

  constructor(registroGerente: string, idCliente: number, numeroConta: string, saldo: number, idConta?: number) {
    super(registroGerente, idCliente, numeroConta, TipoConta.POUPANCA, saldo, idConta);
    this.taxaRendimento = 0.2;
  }

  public getTaxaRendimento(): number {
    return this.taxaRendimento;
  }

  public aplicarRendimento(): void {
    this.saldo += this.saldo * this.taxaRendimento;
  }
}
