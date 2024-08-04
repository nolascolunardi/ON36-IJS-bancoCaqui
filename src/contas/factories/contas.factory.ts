import { Injectable } from '@nestjs/common';
import { Conta } from '../models/entities/contas';
import { ContaCorrente } from '../models/entities/conta-corrente';
import { ContaPoupanca } from '../models/entities/conta-poupanca';
import { TipoConta } from '../enums/tipos-conta.enum';

@Injectable()
export class ContasFactory {
  public createConta(tipoConta: TipoConta, registroGerente: string, idCliente: number, numeroConta: string, saldo: number): Conta {
    switch (tipoConta) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(registroGerente, idCliente, numeroConta, saldo, 100);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(registroGerente, idCliente, numeroConta, saldo, 0.05);
      default:
        throw new Error('Tipo de conta inválido');
    }
  }
}
