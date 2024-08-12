import { TipoConta } from '../../enums/tipos-conta.enum';

export class Conta {
  protected registroCliente: string;
  protected idCliente: number;
  public idConta: number;
  public numeroConta: string;
  public tipoConta: TipoConta;
  protected status: boolean = true;
  protected saldo: number;

  constructor(registroCliente: string, idCliente: number, numeroConta: string, tipoConta: TipoConta, saldo: number, idConta?: number) {
    this.idConta = idConta;
    this.registroCliente = registroCliente;
    this.idCliente = idCliente;
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
  }

  public setIdConta(idConta: number): void {
    this.idConta = idConta;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setTipoConta(tipoConta: TipoConta): void {
    this.tipoConta = tipoConta;
  }
}
