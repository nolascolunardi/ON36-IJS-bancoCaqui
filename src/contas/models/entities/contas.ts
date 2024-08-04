import { TipoConta } from '../../enums/tipos-conta.enum';

export class Conta {
  protected registroCliente: string;
  protected idCliente: number;
  public idConta: number;
  protected numeroConta: string;
  protected tipoConta: TipoConta;
  protected status: boolean = true;
  protected saldo: number;

  constructor(registroCliente: string, idCliente: number, numeroConta: string, tipoConta: TipoConta, saldo: number) {
    this.registroCliente = registroCliente;
    this.idCliente = idCliente;
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
  }

  public setIdConta(idConta: number): void {
    this.idConta = idConta;
  }
}
