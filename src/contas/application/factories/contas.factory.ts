import { Injectable } from '@nestjs/common';
import { Conta } from '../../domain/contas';
import { ContaCorrente } from '../../domain/conta-corrente';
import { ContaPoupanca } from '../../domain/conta-poupanca';
import { TipoConta } from '../../domain/enums/tipos-conta.enum';

@Injectable()
export class ContasFactory {
  public createConta(tipoConta: TipoConta, registroGerente: string, idCliente: number, numeroConta: string, saldo: number): Conta {
    switch (tipoConta) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(registroGerente, idCliente, numeroConta, saldo);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(registroGerente, idCliente, numeroConta, saldo);
      default:
        throw new Error('Tipo de conta inválido');
    }
  }
}
