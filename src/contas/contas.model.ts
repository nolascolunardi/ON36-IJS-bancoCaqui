export enum TipoConta {
  CORRENTE = 'CORRENTE',
  POUPANCA = 'POUPANCA',
}

export class Conta {
  public idCliente: number;
  public idConta: number;
  public numeroConta: string;
  public tipoConta: TipoConta;
  public status: boolean = true;
  public saldo: number;

  constructor(
    idCliente: number,
    numeroConta: string,
    tipoConta: TipoConta,
    saldo: number,
  ) {
    this.idCliente = idCliente;
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
  }
}
