import { TipoConta } from './enums/tipos-conta.enum';
import { randomUUID } from 'crypto';

export class Conta {
  registroGerente: string;
  idCliente: number;
  id: string;
  numeroConta: string;
  tipoConta: TipoConta;
  status: boolean;
  saldo: number;

  constructor(registroGerente: string, idCliente: number, numeroConta: string, tipoConta: TipoConta) {
    this.registroGerente = registroGerente;
    this.idCliente = idCliente;
    this.id = randomUUID();
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.status = true;
    this.saldo = 0;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }

  public sacar(valor: number): void {
    if (this.saldo < valor) {
      throw new Error('Saldo insuficiente.');
    }
    this.saldo -= valor;
  }
}
